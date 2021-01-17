import Move from '../move'
import Procedure, { roll, choice, modifier, multipleEffect } from '../move_procedure'

const undertakeAPeriliousJourney = new Move({
	title: 'Undertake a Perilous Journey',
	text: 
`When you travel through hostile territory, choose one member of the party to act as trailblazer, one to scout ahead, and one to be quartermaster. Each character with a job to do rolls+Wis.
* On a 10+:
	* the quartermaster reduces the number of rations required by one
	* the trailblazer reduces the amount of time it takes to reach your destination (the GM will say by how much)
	* the scout will spot any trouble quick enough to let you get the drop on it
* On a 7–9, each role performs their job as expected: the normal number of rations are consumed, the journey takes about as long as expected, no one gets the drop on you but you don’t get the drop on them either.

You can’t assign more than one job to a character. If you don’t have enough party members, or choose not to assign a job, treat that job as if it had been assigned and the responsible player had rolled a 6.`,

	procedure: new Procedure('When you’re on watch and something approaches the camp', choice('What is your role in this journey?', {
		'Quartermaster': roll('roll+Wis', {
			success: 'You reduce the number of rations required by one.',
			partialSuccess: 'The normal number of rations are consumed.'
		}),
		'Trailblazer': roll('roll+Wis', {
			success: 'You reduce the amount of time it takes to reach your destination (the GM will say by how much).',
			partialSuccess: 'The journey takes about as long as expected.'
		}),
		'Scout': roll('roll+Wis', {
			success: 'You will spot any trouble quick enough to let you get the drop on it.',
			partialSuccess: 'No one gets the drop on you but you don’t get the drop on them either.'
		})
	}))
})

export default undertakeAPeriliousJourney
