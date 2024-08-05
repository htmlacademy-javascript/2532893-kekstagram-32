// Реализовал самостоятельно, лайв не смотрел. Мне такой подход больше нравится, чем создавать объект под каждый эффект

function Effect(min, max, step, start) {

  this.range = {
    min: min,
    max: max,
  };
  this.step = step,
  this.start = start,
  this.connect = 'lower';
}

const NONE = new Effect(0, 100, 1, 100);
const CHROME = new Effect(0, 1, 0.1, 1);
const SEPIA = new Effect(0, 1, 0.1, 1);
const MARVIN = new Effect(0, 100, 1, 100);
const PHOBOS = new Effect(0, 3, 0.1, 3);
const HEAT = new Effect(1, 3, 0.1, 3);

const EFFECTS = {
  NONE,
  CHROME,
  SEPIA,
  MARVIN,
  PHOBOS,
  HEAT
};

export { EFFECTS};
