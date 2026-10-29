import { SCHEDULE, SCHEDULE_NOTE } from '../content/site';
import { Clock } from './Icons';
import './ScheduleCard.css';

const todayName = () => {
  try {
    return new Intl.DateTimeFormat('es-HN', { weekday: 'long', timeZone: 'America/Tegucigalpa' })
      .format(new Date())
      .toLowerCase();
  } catch {
    return '';
  }
};

/** Tabla de horarios. Los días sin horario confirmado muestran «Por confirmar». */
export function ScheduleCard({ compact = false }: { compact?: boolean }) {
  const today = todayName();
  const pending = SCHEDULE.every((d) => !d.hours);

  return (
    <div className={`schedule ${compact ? 'schedule--compact' : ''}`}>
      <div className="schedule__head">
        <span className="schedule__icon"><Clock /></span>
        <div>
          <h2 className="schedule__title">Horarios de atención</h2>
          {pending && <span className="pending-tag">Horarios pendientes de confirmación</span>}
        </div>
      </div>
      <table className="schedule__table">
        <caption className="visually-hidden">Horarios de atención por día</caption>
        <tbody>
          {SCHEDULE.map(({ day, hours }) => {
            const isToday = day.toLowerCase() === today;
            return (
              <tr key={day} className={isToday ? 'is-today' : undefined}>
                <th scope="row">
                  {day}
                  {isToday && <span className="schedule__today">Hoy</span>}
                </th>
                <td className={hours ? '' : 'is-pending'}>{hours ?? 'Por confirmar'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {SCHEDULE_NOTE && <p className="schedule__note">{SCHEDULE_NOTE}</p>}
    </div>
  );
}
