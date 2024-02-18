function TimeDropdown(props) {

  const times = [];

  for(let h=0; h<24; h++) {
    for(let m=0; m<60; m+=30) {
      times.push({
        value: `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`, 
        label: `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`
      });
    }
  }

  return (
    <select className={props.class} onChange={props.handler}>
      {times.map(time => (
        <option key={time.value} value={time.value}>
          {time.label}
        </option>  
      ))}
    </select>
  );

}

export default TimeDropdown;