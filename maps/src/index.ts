import { Company } from './Company';
import { User } from './User';
import { CustomMap } from './CustomMap';

const company = new Company();
const user = new User();
const googleMap = new CustomMap('map');

googleMap.addMarker(company);
googleMap.addMarker(user);