export const Promotions = () => JSON.parse(process.env.REACT_APP_PROMOTIONS);

export const CurrentPromo = () => Promotions().filter(promo => {
  const startDt = new Date(promo.startDt + ' GMT-3');
  const endDt = new Date(promo.endDt + ' GMT-3');
  const nowDt = new Date();

  const hasStarted = nowDt >= startDt;
  const hasFinished = nowDt >= endDt;

  return hasStarted && !hasFinished;
})[0];