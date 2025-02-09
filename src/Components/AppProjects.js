

const AppProjects = () => {

    const apps = [
      { 
        title: "Todo-List", 
        url: "https://aguadebebe.github.io/todo-list/",
      },
        
      { 
        title: "Incrementor", 
        url: "https://aguadebebe.github.io/counter/",
      },
        
      { 
        title: "Carousel-1", 
        url: "https://aguadebebe.github.io/componentz/", 
      },
        
      {  
        title: "Carousel-2", 
        url: "https://aguadebebe.github.io/acc/", 
      },
        
      { 
        title: "Incorrect-Weather", 
        url: "https://aguadebebe.github.io/weather-report/", 
      },
      
      { 
        title: "Color-Picks", 
        url: "https://aguadebebe.github.io/color-picks/", 
      },
    ];

    return (
        
        <div className="projects">
           {apps.map((app, index) => (
              <a 
                key={index}
                href={app.url}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <div className="app-title">{app.title}</div>
              </a>
          ))}
        </div>
    );
} 

export default AppProjects;