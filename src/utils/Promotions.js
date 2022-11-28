export const Promotions = () => JSON.parse(process.env.REACT_APP_PROMOTIONS);

export const CurrentPromo = () => Promotions().filter(promo => {
  const startDt = new Date(promo.startDt);
  const endDt = new Date(promo.endDt);
  const nowDt = Date.now();

  const hasStarted = nowDt > startDt;
  const hasFinished = nowDt > endDt;

  return hasStarted && !hasFinished;
})[0];