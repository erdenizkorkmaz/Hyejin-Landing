import Link from 'next/link';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <main>
      <nav>
        <ul>
          <li>
            <Link href="/about">ABOUT</Link>
            <Link href="/projects">PROJECTS</Link>
            <Link href="/contact">CONTACT</Link>
            <Link href="/instagram">instagram</Link>
          </li>
        </ul>
      </nav>
      <section id="hero">
        <div className="marquee">
          <div className="marquee-inner">
            <span className="marquee-inner-text">
              <div>
                <span>HYEJIN</span>
                <span className="pure">HYEJIN</span>
                <span>HYEJIN</span>
                <span className="pure">HYEJIN</span>&nbsp;
              </div>
            </span>
            <span className="marquee-inner-text">
              <div>
                <span>HYEJIN</span>
                <span className="pure">HYEJIN</span>
                <span>HYEJIN</span>
                <span className="pure">HYEJIN</span>&nbsp;
              </div>
            </span>
          </div>
        </div>
        <strong>
          HYEJ<span className="color">i</span>N H
          <Link href="mailto:hi@hyejin.co.uk">
            <span>REACH OUT</span>
            <span>A</span>
            <span>REACH OUT</span>
          </Link>
        </strong>
        <h1>
          <p>
            I AM A <b>FASHION DESIGNER</b>
          </p>
          <p>
            WHO IS <b>PASSIONATE</b>
          </p>
          <p>
            ABOUT <b>BRINGING STORIES TO LIFE</b>
          </p>
        </h1>
        <span>RCA 23&#39;</span>
      </section>
    </main>

    <style jsx>
      {`
        @keyframes marquee {
          0% {
            left: 0;
          }
          100% {
            left: -100%;
          }
        }

        .marquee {
          overflow: hidden;
          box-sizing: border-box;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 96px;
          width: 610px;
          overflow: hidden;
          white-space: nowrap;
          transform: rotate(-45deg);
          margin-left: -200px;
          border-bottom: solid 3px black;
          .marquee-inner {
            display: block;
            width: 200%;
            position: absolute;
            animation: marquee 10s linear infinite;
          }
        }

        .marquee-inner .marquee-inner-text {
          float: left;
          width: 50%;
          overflow: hidden;
          font-size: 96px;
        }

        .marquee-inner .pure {
          color: black;
        }
      `}
    </style>
  </div>
);

export { Base };
