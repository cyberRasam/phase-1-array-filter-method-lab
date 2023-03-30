// Code your solution here
const findMatching = (drivers, name) => {
    const matches = drivers.filter((driver)=> {
       return driver.toLowerCase() === name.toLowerCase(); 
        
    })
    return matches;
}

const fuzzyMatch = (drivers, match) => {
    
    const matches = drivers.filter((driver) => {
        return driver.startsWith(match);
    })
    
    return matches;
}

const matchName = (drivers, str) => {
    const matches = drivers.filter((driver) => {
        return driver.name === str
    })
    return matches
}