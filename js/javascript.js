const PROGRAMMES = [
  {
    article_class: 'intern',
    programme_title: 'Intern',
    description: 'Gain valuable work experience and forge new networks',
    details: 'Where: Madrid, Spain<br>Organization: SLV inc.<br>Type of Work: Data Analysis<br>Duration: 16 weeks<br>Pay: Yes',
    button_ID: 'intern',
    details_ID: 'intern_details'
  },

  {
    article_class: 'volunteer',
    programme_title: 'Volunteer',
    description: 'Make the world a better place for everyone',
    details: 'Where: Mexico City, Mexico<br>Organization: Jazzhands Foundation<br>Duration: 8 weeks<br>Pay: No',
    button_ID: 'volunteer',
    details_ID: 'volunteer_details'
  },

  {
    article_class: 'teach',
    programme_title: 'Teach',
    description: 'Meaningful work in new cultures',
    details: 'Where: Maryland, USA<br>Organization: Woodcreek Elementary<br>Duration: 12 weeks<br>Pay: Yes',
    button_ID: 'teach',
    details_ID: 'teach_details'
  },

  {
    article_class: 'study',
    programme_title: 'Study',
    description: 'Broaden your horizons, in one semester',
    details: 'Where: Toronto, Canada<br>Organization: Univeristy of Toronto<br>Duration: 12 weeks<br>Pay: No',
    button_ID: 'study',
    details_ID: 'study_details'
  },

  {
    article_class: 'summer',
    programme_title: 'Summer Camp',
    description: 'Step outiside your comfort zone',
    details: 'Where: Adelaide, Australia<br>Organization: University of Adelaide<br>Duration: 4 weeks<br>Pay: No',
    button_ID: 'summer',
    details_ID: 'summer_details'
  }
];

function createProgrammeHTML(programme){
  let programmeHTML = $("<article class = '" + programme.article_class +"'>");

  let header = $("<h3>");
  header.append(programme.programme_title);

  let description = $("<p class = 'description' id = '"+programme.article_class+"_description'>");
  description.append(programme.description);

  let details = $("<p class = 'details' id = '"+programme.details_ID+"'>");
  details.append(programme.details);

  let button = $("<button class = 'seeMore' id = '"+programme.button_ID+"'>");
  button.append('See more');
  button.on('click', displayDetails);

  programmeHTML.append(header);
  programmeHTML.append(description);
  programmeHTML.append(button);
  programmeHTML.append(details);


  return programmeHTML;
}

function displayProgrammes(programmes){
  let programmesList = $('.wrapper');

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

function displayDetails(){
    let button = $(this);
    if(button.text() == 'See more'){
        button.text('See less');
    }
    else if(button.text() == 'See less'){
        button.text('See more');
    }
    let buttonID = button.attr('id');
    let detailsID = buttonID + '_details';
    $('#'+detailsID).toggle(300);
}


function showGoButton(){
  $('#searchTextButton').show(300);
}

function hideGoButton(){
  $('#searchTextButton').hide(300);
}
