const PROGRAMMES = [
  {
    article_class: 'intern',
    programme_title: 'Intern',
    description: 'Gain valuable work experience and forge new networks',
    details: 'Where: Madrid, Spain<br>Organization: SLV inc.<br>Type of Work: Data Analysis<br>Duration: 16 weeks<br>Pay: Yes'
  },

  {
    article_class: 'volunteer',
    programme_title: 'Volunteer',
    description: 'Make the world a better place for everyone',
    details: 'Where: Mexico City, Mexico<br>Organization: Jazzhands Foundation<br>Duration: 8 weeks<br>Pay: No'
  },

  {
    article_class: 'teach',
    programme_title: 'Teach',
    description: 'Meaningful work in new cultures',
    details: 'Where: Maryland, USA<br>Organization: Woodcreek Elementary<br>Duration: 12 weeks<br>Pay: Yes'
  },

  {
    article_class: 'study',
    programme_title: 'Study',
    description: 'Broaden your horizons, in one semester',
    details: 'Where: Toronto, Canada<br>Organization: Univeristy of Toronto<br>Duration: 12 weeks<br>Pay: No'
  },

  {
    article_class: 'summer',
    programme_title: 'Summer Camp',
    description: 'Step outiside your comfort zone',
    details: 'Where: Adelaide, Australia<br>Organization: University of Adelaide<br>Duration: 4 weeks<br>Pay: No'
  }
];

function createProgrammeHTML(programme){
  let programmeHTML = $("<article class = '" + programme.article_class +"'>");

  let header = $("<h3>");
  header.append(programme.programme_title);

  let description = $("<p class = 'description'>");
  description.append(programme.description);

  let details = $("<p class = 'details'>");
  details.append(programme.details);

  let button = $("<button>");
  button.append('See more');

  programmeHTML.append(header);
  programmeHTML.append(description);
  programmeHTML.append(button);
  programmeHTML.append(details);

  return programmeHTML;
}

function displayProgrammes(programmes){
  let programmesList = $('.programmes');

  programmesList.empty();
  for(let programme of programmes){
    let programmeHTML = createProgrammeHTML(programme);
    programmesList.append(programmeHTML);
  }
}

$(document).ready(function(){
	let mainProgrammes = [PROGRAMMES[0], PROGRAMMES[1]];

	displayProgrammes(mainProgrammes);
});

function search() {
		// Get the query string
		let query = $("#searchText").val();
		//console.log(query);

		// Standardize the query (you must do the same when comparing this value against the course_title string)
		query = query.toLowerCase().trim();
		//console.log(query);

		// Hold the matched queries
		let matches = [];

		// Search for courses matching the query string using the course_title property
		for(let programme of PROGRAMMES){
			let programmeTitle = programme.programme_title;
			programmeTitle = programmeTitle.toLowerCase();
		// Add each matched course to the matches array
			if(programmeTitle.includes(query)){
					matches.push(programme);
				}
		// Display all matched courses
		displayProgrammes(matches);
	}
}
