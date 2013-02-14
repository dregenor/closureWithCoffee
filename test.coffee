class A
  constructor: (@name, @sex) ->


class Male extends A
  constructor: (@name) ->
    super @name, 'Men'