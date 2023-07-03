import React,{useState} from 'react'
import styles from './Navbar.module.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import FilterListIcon from '@mui/icons-material/FilterList';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BgColor from '../Background';


function Navbars() {

  return (
    <div className={styles.main} >
    <div className={styles.sub_main} >
    <h3 className={styles.technetium} >Technetium</h3>
    <StarBorderIcon className={styles.star} />
    <PeopleIcon className={styles.peoples}/>
    <a className={styles.anchor}>Workspace visible</a>
    <div className={styles.sub_main3} >
    <BarChartIcon className={styles.chart} />
    <a className={styles.anchor2}>Board</a>
    </div>
    <ExpandMoreIcon className={styles.down} />
    
    </div>
    <div className={styles.second} >
    <RocketLaunchIcon/>
    <a className={styles.anchor3} >Power-ups</a>
    <FlashOnIcon/>
    <a className={styles.anchor4} >Automation</a>
    <FilterListIcon/>
    <a className={styles.anchor5} >Filter</a>
    <div className={styles.third} >
        <h3 className={styles.txt3} >DP</h3>
    </div>
    <div className={styles.fourth} >
    <PersonAddAltIcon/>
    <a className={styles.anchor5} >Share</a>
    </div>
    <MoreHorizIcon />
    </div>
    </div>
  )
}

export default Navbars;
