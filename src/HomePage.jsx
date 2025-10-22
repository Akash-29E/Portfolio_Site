import './HomePage.css';
import Accordion from './components/Accordion';

export default function HomePage() {
    return (
        <main className="home-main-content">
            <div className="home-flex">
                        <h1>Akash Parmar</h1>
                        <p>
                            Web Developer
                        </p>
                        
                        <Accordion title={'JavaScript | React | Node.js | HTML | CSS'}>
                        <p>
                             MongoDB | Mongoose | Middleware | RESTful Routing
                        </p>
                        <p>
                             AXIOS | Express.js | Authentication | Vite | Material UI
                        </p>
                        </Accordion>
                        
            </div>
        </main>
    );
}