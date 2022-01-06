import {React,useEffect,useState} from "react";
import HomeBanner from "./HomeBanner";
import BottomBorder from "./BottomBorder";
import SearchBar from "material-ui-search-bar";

function SchoolPage(){
    const [schoolList, setschoolList] = useState([]);
    const [searchFilter, setSearchFilter] = useState(schoolList);

    useEffect(() => {
        fetch("/schools")
        .then((r) => r.json())
        .then((schools) => setschoolList(schools))
    }, []);

    const handleSearch = (e) => {
        const filtered = schoolList.filter((school) => {
          return school.name.toLowerCase().includes(e)
        })
        setSearchFilter(filtered)
      }

      useEffect(() => {
        setSearchFilter(schoolList)
      },[schoolList])

    return(
        <div className="schoolPage">
            <HomeBanner title="ALL SCHOOLS"/>
              <SearchBar className="search-bar gapDiv" onChange={handleSearch}/>
            {searchFilter.map(school=>(
                 <div className="collegeContainers">
                   {/* to school services page */}
                   <a href={`http://localhost:4000/schools/${school.name}`}><img src={school.image_url} alt={school.name} key={school.id}/></a>
                {console.log('ive been fetched')}
                </div>
            ))}
            <BottomBorder/>
        </div>
    )
}
export default SchoolPage