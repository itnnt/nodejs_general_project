// Identifiers and Reserved Words
// An identifier is simply a name.
// A JavaScript identifier must begin with a letter, an underscore (_), or a dollar sign ($).
// Digits are not allowed as the first character.

var my_name = "Tung";
var z3 = "z3";
var _flag = "flag"
var $yes = true;

console.log(my_name)
console.log(z3)
console.log($yes)
/**
 *
 */
// The identifiers reserved by the language for its use are known as “reserved words”.
// Below is the table of all the reserved words.

// abstract	arguments	boolean	break	byte
// case	catch	char	class	const
// continue	debugger	default	delete	do
// double	else	enum	eval	export
// extends	false	final	finally	float
// for	function	goto	if	implements
// import	in	instanceof	int	interface
// let	long	native	new	null
// package	private	protected	public	return
// short	static	super	switch	synchronized
// this	throw	throws	transient	true
// try	typeof	var	void	volatile
// while	with	yield	

/**
Following are the name of JS built-in objects, properties, and methods:

Array	Date	eval	function	hasOwnProperty
Infinity	isFinite	isNaN	isPrototypeOf	length
Math	NaN	name	Number	Object
prototype	String	toString	undefined	valueOf
 */


/**
Some Java objects and properties are also used in JavaScript.
getClass	java	JavaArray	javaClass	JavaObject	JavaPackage
 */

/**
 * JavaScript can also be used in many other applications.
 * In HTML you must avoid using the name of HTML and Windows objects and properties

alert	all	anchor	anchors	area
assign	blur	button	checkbox	clearInterval
clearTimeout	clientInformation	close	closed	confirm
constructor	crypto	decodeURI	decodeURIComponent	defaultStatus
document	element	elements	embed	embeds
encodeURI	encodeURIComponent	escape	event	fileUpload
focus	form	forms	frame	innerHeight
innerWidth	layer	layers	link	location
mimeTypes	navigate	navigator	frames	frameRate
hidden	history	image	images	offscreenBuffering
open	opener	option	outerHeight	outerWidth
packages	pageXOffset	pageYOffset	parent	parseFloat
parseInt	password	pkcs11	plugin	prompt
propertyIsEnum	radio	reset	screenX	screenY
scroll	secure	select	self	setInterval
setTimeout	status	submit	taint	text
textarea	top	unescape	untaint	window
 */

/**
 * In addition you should avoid using the name of all HTML event handlers.
onblur	onclick	onerror	onfocus
onkeydown	onkeypress	onkeyup	onmouseover
onload	onmouseup	onmousedown	onsubmit
 */

/**
 * Optional Semicolon
Semicolons are used in JavaScript to separate statements from each other. 
But you can also omit the semicolon between two statements if those statements are written on separate lines.

Right :x = 7                     AND      x = 7;                AND x = 3; z = 7;

z = 3;                                   z = 3;

Since the two statements appear on separate line, 
line break is sufficient to tell these are two different statements. 
Semicolon before the line break is optional.

Wrong:x=7 z = 3;

Here, both statements are on same line but there is no way to differentiate between them. 
Therefore, a semicolon after first statement is required here.
 */