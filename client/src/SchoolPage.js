import {React,useEffect,useState} from "react";
import HomeBanner from "./HomeBanner";
import BottomBorder from "./BottomBorder";
import SearchBar from "material-ui-search-bar";

function SchoolPage({schoolList}){
    const [searchFilter, setSearchFilter] = useState(schoolList);

    const alphabeticalFiltered= schoolList.sort(function(a,b){
      if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
    })

    const handleSearch = (e) => {
        const filtered = alphabeticalFiltered.filter((school) => {
          return school.name.toLowerCase().includes(e)
        })
        setSearchFilter(filtered)
      }

      useEffect(() => {
        setSearchFilter(alphabeticalFiltered)
      },[alphabeticalFiltered])

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