import { useState, type FormEvent } from 'react';
import { INQUIRY_FORM, SITE } from '../content/site';
import { Check, Send } from './Icons';
import './InquiryForm.css';

type Status = { kind: 'idle' } | { kind: 'sending' } | { kind: 'sent' } | { kind: 'error'; detail?: string };

const TOPICS = ['Información general', 'Cotización', 'Otro trámite administrativo'];

/**
 * Formulario de consultas administrativas.
 * Envía los datos al servicio configurado en INQUIRY_FORM (FormSubmit por defecto), que los reenvía
 * al correo del centro. Solo muestra «enviado» cuando el servicio confirma el envío.
 */
export function InquiryForm() {
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Campo trampa: los bots lo rellenan, las personas no lo ven.
    if (data.get('_honey')) return;

    const payload = {
      Nombre: String(data.get('nombre') ?? '').trim(),
      Correo: String(data.get('correo') ?? '').trim(),
      'Teléfono': String(data.get('telefono') ?? '').trim() || 'No indicado',
      'Tipo de solicitud': String(data.get('tipo') ?? ''),
      Mensaje: String(data.get('mensaje') ?? '').trim(),
      _subject: `${INQUIRY_FORM.subject} — ${String(data.get('tipo') ?? '')}`,
      _replyto: String(data.get('correo') ?? '').trim(),
      _template: 'table',
      _captcha: 'false',
    };

    setStatus({ kind: 'sending' });
    try {
      const res = await fetch(INQUIRY_FORM.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const body = (await res.json().catch(() => ({}))) as { success?: string | boolean; ok?: boolean; message?: string };
      const confirmed = res.ok && (body.success === true || body.success === 'true' || body.ok === true);
      if (!confirmed) throw new Error(body.message || `HTTP ${res.status}`);
      setStatus({ kind: 'sent' });
      form.reset();
    } catch (err) {
      setStatus({ kind: 'error', detail: err instanceof Error ? err.message : undefined });
    }
  }

  if (status.kind === 'sent') {
    return (
      <div className="inquiry inquiry--sent" role="status">
        <span className="inquiry__ok"><Check /></span>
        <h2>Solicitud enviada</h2>
        <p>Recibimos tu mensaje. El consultorio te responderá al correo que indicaste.</p>
        <button type="button" className="btn btn--ghost btn--sm" onClick={() => setStatus({ kind: 'idle' })}>
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  const sending = status.kind === 'sending';

  return (
    <form className="inquiry" onSubmit={onSubmit} noValidate={false} aria-describedby="inquiry-privacy">
      <div className="inquiry__row">
        <div className="field">
          <label htmlFor="f-nombre">Nombre completo</label>
          <input id="f-nombre" name="nombre" type="text" autoComplete="name" required maxLength={100} />
        </div>
        <div className="field">
          <label htmlFor="f-correo">Correo electrónico</label>
          <input id="f-correo" name="correo" type="email" autoComplete="email" required maxLength={120} />
        </div>
      </div>

      <div className="inquiry__row">
        <div className="field">
          <label htmlFor="f-telefono">
            Teléfono <span className="field__opt">(opcional)</span>
          </label>
          <input id="f-telefono" name="telefono" type="tel" autoComplete="tel" maxLength={30} inputMode="tel" />
        </div>
        <div className="field">
          <label htmlFor="f-tipo">Tipo de solicitud</label>
          <select id="f-tipo" name="tipo" required defaultValue={TOPICS[0]}>
            {TOPICS.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="f-mensaje">Mensaje</label>
        <textarea id="f-mensaje" name="mensaje" rows={5} required maxLength={1500} aria-describedby="f-mensaje-hint" />
        <p id="f-mensaje-hint" className="field__hint">
          Escribe tu consulta administrativa. Por tu privacidad, no incluyas síntomas, diagnósticos ni otros datos médicos.
        </p>
      </div>

      <div className="field field--check">
        <input id="f-consent" name="consentimiento" type="checkbox" required />
        <label htmlFor="f-consent">
          Entiendo que este formulario es solo para consultas administrativas y que no debo enviar información clínica.
        </label>
      </div>

      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="visually-hidden" aria-hidden="true" />

      {status.kind === 'error' && (
        <div className="inquiry__error" role="alert">
          <strong>No se pudo enviar la solicitud.</strong> Inténtalo de nuevo en unos minutos o escribe directamente a{' '}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </div>
      )}

      <div className="inquiry__foot">
        <button type="submit" className="btn" disabled={sending}>
          <Send /> {sending ? 'Enviando…' : 'Enviar solicitud'}
        </button>
        <p id="inquiry-privacy" className="inquiry__privacy">
          Tus datos se usan únicamente para responder esta solicitud y se envían al correo del centro.
        </p>
      </div>
    </form>
  );
}
