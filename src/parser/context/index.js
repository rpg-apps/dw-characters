import TypeParser from './type'
import FieldParser from './field'
import ChoiceParser from './choice'
import FormulaParser from './formula'
import EffectParser from './effect'

import Context from '../../models/rules/context'

export default class ParsingContext {
  constructor (rawRules, externalParsers) {
    this.rawRules = rawRules
    this.typeParser = new TypeParser(this)
    this.choiceParser = new ChoiceParser(this)
    this.fieldParser = new FieldParser(this)
    this.formulaParser = new FormulaParser(this)
    this.effectParser = new EffectParser(this)
    Object.assign(this, externalParsers)
  }

  extract () {
    return new Context({
      types: this.typeParser.types,
      choices: this.choiceParser.choices,
      fields: this.fieldParser.allFields(),
      formulas: this.formulaParser.formulas,
      effects: this.formulaParser.effects,
    })
  }
}