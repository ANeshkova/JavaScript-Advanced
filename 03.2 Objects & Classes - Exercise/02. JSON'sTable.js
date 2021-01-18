function JSONsTable(input) {

	let result = '<table>\n';

	for (const jsonString of input) {
		let parsed = JSON.parse(jsonString);

		result += '\t<tr>\n'

		for (const value of Object.values(parsed)) {
			result += `\t\t<td>${value}</td>\n`
		}

		result += '\t</tr>\n'
	}

	result += '</table>'

	console.log(result);
}

JSONsTable([
	'{"name":"Pesho","position":"Promenliva","salary":100000}',
	'{"name":"Teo","position":"Lecturer","salary":1000}',
	'{"name":"Georgi","position":"Lecturer","salary":1000}'
]);

/**<table>
	<tr>
		<td>Pesho</td>
		<td>Promenliva</td>
		<td>100000</td>
	</tr>
	<tr>
		<td>Teo</td>
		<td>Lecturer</td>
		<td>1000</td>
	</tr>
	<tr>
		<td>Georgi</td>
		<td>Lecturer</td>
		<td>1000</td>
	</tr>
</table>
 */
