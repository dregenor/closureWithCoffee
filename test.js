(function() {
goog.provide('A');
goog.provide('Male');



goog.scope(function() {

      /**
   * @constructor
   */
  A = function(name, sex) {
    this.name = name;
    this.sex = sex;
  };
;
      /**
   * @constructor
   * @extends {A}
   */
  Male = function(name) {
    this.name = name;
    A.call(this, this.name, 'Men');
  };
goog.inherits(Male, A);
;

}); // close goog.scope()
}).call(this);

