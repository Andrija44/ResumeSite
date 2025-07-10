function Skills({skill}: {skill: {name: string, elements: any[]}}) {
  return (
    <div className="skills">
        <h3>{skill.name}</h3>
        {skill.elements.map(element => (
        <div key={element.icon} className="skill-element">
            <i className={`${element.icon}`}></i>
            <span>{element.name}</span>
        </div>
        ))}
    </div>
  );
}

export default Skills