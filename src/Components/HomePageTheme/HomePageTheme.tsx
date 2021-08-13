import React, { FC } from 'react';

const HomePageTheme: FC = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6">
                    <div className="card mb-5" >
                        <img className="img-fluid" alt="MacBook" height="308px" width="100%" src="https://sm.pcmag.com/pcmag_in/news/m/mac-users-/mac-users-can-finally-watch-netflix-in-4k-hdr_s6ka.jpg" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card mb-5">
                        <img className="img-fluid" alt="iPhone12" width="100%" src="https://149367133.v2.pressablecdn.com/wp-content/uploads/2020/04/GadgetMatch-20200417-Apple-iPhone-12-Pro-02.jpg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageTheme;