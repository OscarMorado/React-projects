import { lideres } from "../data/lideres";
export const getLiderById = (id) => lideres.find((lider) => lider.id === id); //El return no es necesario


export const getLiderByGroup = (group) => lideres.filter((lider) => lider.group === group); 
