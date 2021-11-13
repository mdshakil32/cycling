import React from 'react';

const AboutUs = () => {
    return (
        <div className="container my-5" >
            
            <div className="row">
                <div className="col-md-6">
                    <img src="https://i.ibb.co/st3PnNL/about.jpg" className="w-100 rounded" alt="" />
                </div>
                <div className="col-md-6">
                    <h1 >About Us</h1>
                    <h4>We have been making bicycles for 25 years</h4>
                    <p className="my-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <ul className="lh-lg list-unstyled">
                        <li>✔️ Sed ut perspiciatis unde omnis voluptatem</li>
                        <li>✔️ Iste natus error sit voluptatem beatae</li>
                        <li>✔️ Totam rem aperiam unde omnis laudantium</li>
                        <li>✔️ Wuasi architecto beatae explic omnis</li>
                    </ul>
                    <button className="btn btn-danger">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;