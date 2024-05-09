import styled from "styled-components";
import data from '../data/data.js'
import { BrowserRouter as Router, Link } from "react-router-dom";

function ListContents() {
    return(
        <>
            <div>
            <Router>
                <Link to="/">
                    <div className="img_box">
                        <img src="" alt="" />
                    </div>
                    <div className="txt_box">
                        <div className="tag_list">
                            <span className="tag1">
                                tag1
                            </span>
                        </div>
                        <h2>여기에 글제목이 들어가야해!</h2>
                        <p>여기는 글내용이 들어가야해!</p>
                        <div className="info_writer">
                            <img src="" alt="" />
                            <div>
                                <p className="writer">글쓴이</p>
                                <span className="date"></span>
                            </div>
                        </div>
                    </div>
                </Link>
            </Router>
            </div>
        </>
    )
}

export default ListContents;
