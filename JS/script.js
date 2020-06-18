const jobs = [
            {
            "id": 1,
            "company": "Photosnap",
            "logo": "./images/photosnap.svg",
            "new": true,
            "featured": true,
            "position": "Senior Frontend Developer",
            "role": "Frontend",
            "level": "Senior",
            "postedAt": "1d ago",
            "contract": "Full Time",
            "location": "USA Only",
            "languages": ["HTML", "CSS", "JavaScript"],
            "tools": []
            },
            {
            "id": 2,
            "company": "Manage",
            "logo": "./images/manage.svg",
            "new": true,
            "featured": true,
            "position": "Fullstack Developer",
            "role": "Fullstack",
            "level": "Midweight",
            "postedAt": "1d ago",
            "contract": "Part Time",
            "location": "Remote",
            "languages": ["Python"],
            "tools": ["React"]
            },
            {
            "id": 3,
            "company": "Account",
            "logo": "./images/account.svg",
            "new": true,
            "featured": false,
            "position": "Junior Frontend Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "2d ago",
            "contract": "Part Time",
            "location": "USA Only",
            "languages": ["JavaScript"],
            "tools": ["React", "Sass"]
            },
            {
            "id": 4,
            "company": "MyHome",
            "logo": "./images/myhome.svg",
            "new": false,
            "featured": false,
            "position": "Junior Frontend Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "5d ago",
            "contract": "Contract",
            "location": "USA Only",
            "languages": ["CSS", "JavaScript"],
            "tools": []
            },
            {
            "id": 5,
            "company": "Loop Studios",
            "logo": "./images/loop-studios.svg",
            "new": false,
            "featured": false,
            "position": "Software Engineer",
            "role": "FullStack",
            "level": "Midweight",
            "postedAt": "1w ago",
            "contract": "Full Time",
            "location": "Worldwide",
            "languages": ["JavaScript"],
            "tools": ["Ruby", "Sass"]
            },
            {
            "id": 6,
            "company": "FaceIt",
            "logo": "./images/faceit.svg",
            "new": false,
            "featured": false,
            "position": "Junior Backend Developer",
            "role": "Backend",
            "level": "Junior",
            "postedAt": "2w ago",
            "contract": "Full Time",
            "location": "UK Only",
            "languages": ["Ruby"],
            "tools": ["RoR"]
            },
            {
            "id": 7,
            "company": "Shortly",
            "logo": "./images/shortly.svg",
            "new": false,
            "featured": false,
            "position": "Junior Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "2w ago",
            "contract": "Full Time",
            "location": "Worldwide",
            "languages": ["HTML", "JavaScript"],
            "tools": ["Sass"]
            },
            {
            "id": 8,
            "company": "Insure",
            "logo": "./images/insure.svg",
            "new": false,
            "featured": false,
            "position": "Junior Frontend Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "2w ago",
            "contract": "Full Time",
            "location": "USA Only",
            "languages": ["JavaScript"],
            "tools": ["Vue", "Sass"]
            },
            {
            "id": 9,
            "company": "Eyecam Co.",
            "logo": "./images/eyecam-co.svg",
            "new": false,
            "featured": false,
            "position": "Full Stack Engineer",
            "role": "Fullstack",
            "level": "Midweight",
            "postedAt": "3w ago",
            "contract": "Full Time",
            "location": "Worldwide",
            "languages": ["JavaScript", "Python"],
            "tools": ["Django"]
            },
            {
            "id": 10,
            "company": "The Air Filter Company",
            "logo": "./images/the-air-filter-company.svg",
            "new": false,
            "featured": false,
            "position": "Front-end Dev",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "1mo ago",
            "contract": "Part Time",
            "location": "Worldwide",
            "languages": ["JavaScript"],
            "tools": ["React", "Sass"]
            }
  ]

  //Getting the parent element
   
const jobListing = document.querySelector(".listing")
const jobFilter = document.querySelectorAll(".search-buttons")

// Load all items
let displayJob = job => {
    
    let displayJobs = job.map(j => {
        
        // Selection of the new/featured tag on the job 
        let newJob =j.new ? "New" : "";
        let featured = j.featured ? "Feautured" : "";

        // checks for if new or featured
        let newJobTemp = newJob ? `<span class="tag new">${newJob}</span>` : "";
        let featuredTemp = featured ? `<span class="tag featured">${featured}</span>` : "";

        // languages the developer can use
        let languageTemp = "";
        
        for (let language of j.languages) {
          languageTemp += `<span class="languages">${language}</span>`
        }

        // tools the developer can use 
        let toolTemp = "";
        for (let tool of j.tools) {
          toolTemp += `<span class="languages">${tool}</span>`
        }

        // the returned item

        return `<article class="job-card">

        <!-- Logo Container -->
        <div class="logo-container">
          <img src= ${j.logo} alt="Photosnap Logo" class= ${j.company}>
        </div>

        <!-- Beginning of Job Details -->
        <div class="details">

          <div>
            <h3 class="company">${j.company}</h3>
            ${newJobTemp}
            ${featuredTemp}
          </div>
          


          <div class="positions">
            <h2 class="position">${j.position}</h2>
          </div>

          <div class="final">
            <span class="posted-at">${j.postedAt}</span>
            <span class="list-span contract">${j.contract}</span>
            <span class="list-span location">${j.location}</span>
          </div>

        </div> 
        <!-- End of details section -->


        <!-- Skillset -->

        <div class="skills">
          ${languageTemp}
          ${toolTemp}
        </div>

        <!-- End of an Article tag -->
      </article>`;

    })
    
    displayJobs = displayJobs.join("");
    
    jobListing.innerHTML = displayJobs;
}

//Filter items 
jobFilter.forEach(btn => {

    btn.addEventListener("click", e => {
        
        const category = e.currentTarget.dataset.id;

        // Streamlining Job Search
        const jobCategory = jobs.filter (jobItem => {
            if (category === jobItem.role ) {
                return jobItem;
            }
            if (category === jobItem.level) {
                return jobItem;
            }
            
            if (category === "Reset") {
                return jobItem;
            }

            for(let language of jobItem.languages) {
              if (category === language) {
                return language;
              }
            }

            for(let tool of jobItem.tools) {
              if (category === tool) {
                return tool;
              }
            }

        });
        
       
        displayJob(jobCategory)
        
    })
})  

window.addEventListener("DOMContentLoaded", () => {
    
        displayJob(jobs);
   
})