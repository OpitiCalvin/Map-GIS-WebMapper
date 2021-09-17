/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import icons from '../icons/icons.svg';
import Container from 'react-bootstrap/Container';

function MainFooter() {

    const footerDate = () => {
        return new Date().getFullYear();
    }

    return (
        <Container> 
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3" >
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <svg css={biCss} width="30" height="24"><use xlinkHref={`${icons}#bootstrap`} /></svg>
                    </a>
                    <span className="text-muted">&copy; {footerDate()} Opiti, Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="/twitter"><svg css={biCss} width="24" height="24"><use xlinkHref={`${icons}#twitter`} /></svg></a></li>
                    <li className="ms-3"><a className="text-muted" href="/instagram"><svg css={biCss} width="24" height="24"><use xlinkHref={`${icons}#instagram`} /></svg></a></li>
                    <li className="ms-3"><a className="text-muted" href="/facebook"><svg css={biCss} width="24" height="24"><use xlinkHref={`${icons}#facebook`} /></svg></a></li>
                </ul>
            </footer>
        </Container>
    )
}

export default MainFooter;

const biCss = css`
    vertical-align: -.125em;
    fill: currentColor;
`;