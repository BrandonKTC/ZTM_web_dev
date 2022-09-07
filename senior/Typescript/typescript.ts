/* Datatype */

// boolean
var isCool: boolean = true

// number
let age: number = 56

// string
var eyeColor: string = 'brown'

// array
let pets: string[] = ['cat', 'dog', 'pig']
let pets2: Array<string> = ['lion', 'dragon', 'lizard']

// Object
let wizard: object = {
	a: 'john',
}

// null and undefined
let meh: undefined = undefined
let noo: null = null

// tuple
let basket: [string, number] = ['basketball', 5]

// Enum
enum size {
	small = 1,
	medium = 2,
	large = 3,
}
let sizeName: string = size[2]

// Any - !!!!!! BE CAREFUL
let whatever: any = 'aggghhhhhhh nooooooo!!!!'
whatever = basket

// void
let sing = (): void => {
	console.log('lalalalala')
}

// never
let error = (): never => {
	throw Error('ooops')
}

// interface
interface RobotArmy {
	count: number
	type: string
	magic: string
}

let fightRobotArmy = (robots: RobotArmy) => {
	console.log('FIGHT!')
}

let fightRobotArmy2 = (robots: {
	count: number
	type: string
	magic: string
}) => {
	console.log('FIGHT')
}

// Type Assertion
interface catArmy {
	count: number
	type: string
	magic?: string
}

let dog = {} as catArmy
dog.count

// Func
let fightRobotArmy3 = (robots: RobotArmy): void => {
	console.log('FIGHT!')
}

let fightRobotArmy4 = (robots: {
	count: number
	type: string
	magic: string
}): number => {
	console.log('FIGHT!')
	return 5
}

// Classes
class Animal {
	private sing: string = 'lalalalala'
	constructor(sound: string) {
		this.sing = sound
	}

	greet() {
		return `Hello ${this.sing}`
	}
}

let lion: Animal = new Animal('RAAAWWR')
lion.greet()

// Union
let confused: string | number | boolean = true
