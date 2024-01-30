function TimeDropdown(props){

    const times = [];

    for(let h=0; h<24; h++) {
      for(let m=0; m<60; m+=15) {
        times.push({
          value: `${h}:${m < 10 ? `0${m}` : m}`,
          label: `${h}:${m < 10 ? `0${m}` : m}`  
        });
      }
    }
  
    return (
      <select className={props.class}>
        {times.map(time => (
          <option key={time.value} value={time.value}>
            {time.label}
          </option>
        ))}
      </select>
    );

}

export default TimeDropdown;