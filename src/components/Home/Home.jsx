import s from "./Home.module.css";

export const Home = () => {
  return (
    <div className={s.homePage}>
      <div className={s.homeCard}>
        <h1 className={s.homeTitle}>QR App</h1>
        <p className={s.homeText}>
          Приложение позволяет генерировать QR-коды из текста и сканировать их
          с камеры. Все результаты сохраняются в истории браузера, поэтому вы
          всегда можете вернуться к прошлым кодам.
        </p>
        <div className={s.homeInfo}>
          <p className={s.homeLabel}>Что доступно:</p>
          <ul className={s.homeList}>
            <li>Генерация QR-кодов по введенному тексту</li>
            <li>Сканирование QR-кодов с помощью камеры</li>
            <li>История генераций и сканирований</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
