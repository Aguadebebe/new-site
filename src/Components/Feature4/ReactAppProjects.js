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