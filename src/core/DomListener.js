export class DomListener {
  constructor($root) {
    if (!$root) {
      throw new Error('$root dont provide for DomListener');
    }

    this.$root = $root
  }
}
