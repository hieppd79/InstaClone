export class Prototype {
  static readonly number = {
    formatNumber(value: number) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
  };
}
