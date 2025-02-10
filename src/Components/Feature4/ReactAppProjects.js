import "./ReactAppProjects.css";

const ReactAppProjects = () => {

    const apps = [
      { 
        title: "Color-Picks,", 
        url: "https://aguadebebe.github.io/color-picks/", 
      },
      
      { 
        title: "Todo-List,", 
        url: "https://aguadebebe.github.io/todo-list/",
      },
        
      { 
        title: "Incrementor,", 
        url: "https://aguadebebe.github.io/counter/",
      },
        
      { 
        title: "Carousel-1,", 
        url: "https://aguadebebe.github.io/componentz/", 
      },
        
      {  
        title: "Carousel-2,", 
        url: "https://aguadebebe.github.io/acc/", 
      },
    ];

    return (
        
        <div className="map-container">
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

export default ReactAppProjects;