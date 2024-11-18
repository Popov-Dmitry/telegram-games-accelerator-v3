import Image from "next/image";
import styles from "./page.module.css";
import IconLink from "@/components/icon-link/IconLink";
import Button from "@/components/button/Button";
import { joinClassNames } from "@/utils/join-class-names";
import Link from "next/link";
import Sns from "@/components/sns/Sns";
import Icon from "@/components/icon/Icon";
import Logo from "@/components/logo/Logo";

export default function Home() {
  return (
    <>
      <main>
        <div className={styles.headerWrapper}>
          <div className={joinClassNames(styles.container, styles.header)}>
            <div className={joinClassNames(styles.centeredFlex, styles.gap6)}>
              <Image src="/logo.svg" alt="" width={32} height={32} />
              <div className={styles.headerText}>Telegram Gaming</div>
            </div>
            {/*<div className={joinClassNames(styles.centeredFlex, styles.gap32)}>*/}
            {/*  <Link className={styles.link} href="#tools">*/}
            {/*    Tools*/}
            {/*  </Link>*/}
            {/*  <Link className={styles.link} href="#solutions">*/}
            {/*    Solutions*/}
            {/*  </Link>*/}
            {/*  <Link className={styles.link} href="#partners">*/}
            {/*    Partners*/}
            {/*  </Link>*/}
            {/*</div>*/}
            <div className={joinClassNames(styles.centeredFlex, styles.gap24)}>
              <Sns />
              <Button
                text="apply"
                size="sm"
                href="https://airtable.com/appXnUdjNS7Fzxpq7/pagWSQDZwdqEVDv01/form"
              />
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div
            className={joinClassNames(
              styles.block,
              styles.pb125,
              styles.heroBackground,
              styles.hFull,
              styles.relative
            )}
          >
            <div
              className={joinClassNames(
                styles.container,
                styles.flexCol,
                styles.gap13
              )}
            >
              <div className={joinClassNames(styles.centeredFlex, styles.gap17)}>
                <Image src="/helika-logo.svg" alt="" width={117} height={24} />
                <div className={styles.centeredFlex}>
                  <Image
                    src="/notcoin-logo.svg"
                    alt=""
                    width={28}
                    height={28}
                  />
                  <div className={styles.notcoin}>Notcoin</div>
                </div>
              </div>
            </div>
            <div
              className={joinClassNames(
                styles.container,
                styles.centeredFlex,
                styles.mt74
              )}
            >
              <div className={joinClassNames(styles.logoWrapper, styles.mrM16)}>
                <Image src="/logo-purple.svg" alt="" fill />
              </div>
              <div>
                <div className={styles.telegramGaming}>Telegram Gaming</div>
                <div className={styles.accelerator}>ACCELERATOR</div>
              </div>
            </div>
            <div
              className={joinClassNames(
                styles.container,
                styles.flexCol,
                styles.gap24,
                styles.mt90
              )}
            >
              <div className={joinClassNames(styles.caption, styles.textPurple)}>
                Lead the next wave of Telegram games
              </div>
              <Button
                text="Apply"
                href="https://airtable.com/appXnUdjNS7Fzxpq7/pagWSQDZwdqEVDv01/form"
                newTab
                className={styles.mt20}
              />
            </div>
            <Image
              className={styles.heroBgIcon}
              src="/hero-bg-icon.svg"
              alt=""
              width={482}
              height={465}
            />
          </div>

          <div className={styles.block}>
            <div className={joinClassNames(styles.container, styles.centeredFlex)}>
              <div className={joinClassNames(styles.flexRow, styles.w780)}>
                <img
                  src="/logo-3d.png"
                  alt=""
                  width={320}
                  height={346}
                />
                <div className={styles.textXl}>
                  TGA is an early stage accelerator for gaming studios looking to capitalize on the greenfield
                  opportunity of the Telegram platform.
                  <br /> <br />
                  Our intensive 10-week program focuses on product testing and iterative development, and is designed to
                  help studios rapidly improve their games as they prepare to launch their titles.
                </div>
              </div>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.boxContainer}>
              <div className={joinClassNames(styles.box, styles.flexCol, styles.gap90)}>
                <div className={styles.title}>What we offer</div>
                <div className={joinClassNames(styles.grid3, styles.gridRowGap82, styles.gridColGap53)}>
                  <div className={joinClassNames(styles.flexCol, styles.gap10, styles.alignStart)}>
                    <Icon src="/people.svg" />
                    <div className={joinClassNames(styles.textXl, styles.textBold)}>
                      Free Traffic
                    </div>
                    <div className={styles.text}>
                      Helika and its partners will drive gamers to cohort games to help test the products
                    </div>
                  </div>
                  <div className={joinClassNames(styles.flexCol, styles.gap10, styles.alignStart)}>
                    <Icon src="/poll.svg" />
                    <div className={joinClassNames(styles.textXl, styles.textBold)}>
                      Free Analytics
                    </div>
                    <div className={styles.text}>
                      Cohort teams will get access to analytics dashboards to analyze the results of game tests
                    </div>
                  </div>
                  <div className={joinClassNames(styles.flexCol, styles.gap10, styles.alignStart)}>
                    <Icon src="/local-library.svg" />
                    <div className={joinClassNames(styles.textXl, styles.textBold)}>
                      Mentorship
                    </div>
                    <div className={styles.text}>
                      Get expert guidance from gaming legends and Web3 experts
                    </div>
                  </div>
                  <div className={joinClassNames(styles.flexCol, styles.gap10, styles.alignStart)}>
                    <Icon src="/esports.svg" />
                    <div className={joinClassNames(styles.textXl, styles.textBold)}>
                      Community
                    </div>
                    <div className={styles.text}>
                      Work and test together with you cohort mates, and join an exclusive group of alumni
                    </div>
                  </div>
                  <div className={joinClassNames(styles.flexCol, styles.gap10, styles.alignStart)}>
                    <Icon src="/card-travel.svg" />
                    <div className={joinClassNames(styles.textXl, styles.textBold)}>
                      Demo Day
                    </div>
                    <div className={styles.text}>
                      Showcase your work in front of investors, media and industry peers
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={joinClassNames(styles.block, styles.heroBackground, styles.pb280)}>
            <div className={joinClassNames(styles.container, styles.centeredFlex)}>
              <div className={joinClassNames(styles.flexCol, styles.gap20, styles.w750)}>
                <div className={joinClassNames(styles.title, styles.textPurple)}>
                  Who we are
                </div>
                <div className={joinClassNames(styles.flexRow, styles.gap50)}>
                  <div className={styles.text}>
                    Helika is a gaming analytics company made up of gaming and Web3 veterans. Our goal is to empower
                    studios with the tools to make data driven decisions to successfully develop and publish titles.
                    <br /> <br />
                    We work with both industry giants and up and coming studios to help them build vibrant digital
                    worlds.
                  </div>
                  <div className={styles.selfCenter}>
                    <img
                      src="/helika-3d.png"
                      alt=""
                      width={280}
                      height={361}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={joinClassNames(styles.container, styles.centeredFlex)}>
              <div
                className={joinClassNames(styles.centeredFlex, styles.flexWrap, styles.gap30, styles.w750, styles.mt70)}>
                <Logo src="/ubisoft-logo.png" width={84} height={26} />
                <Logo src="/yugalabs-logo.png" width={75} height={35} />
                <Logo src="/parallel-logo.png" width={110} height={32} />
                <Logo src="/nexon-logo.png" width={86} height={27} />
                <Logo src="/c2us-logo.png" width={87} height={17} />
                <Logo src="/pop-logo.png" width={56} height={42} />
                <Logo src="/wildcard-logo.png" width={88} height={15} />
              </div>
            </div>
          </div>

          <div className={styles.block}>
            <div className={joinClassNames(styles.container, styles.flexCol, styles.gap120, styles.px152)}>
              <div className={joinClassNames(styles.title, styles.textPurple)}>
                Who we are looking for
              </div>
              <div className={joinClassNames(styles.grid3, styles.gridColGap53)}>
                <div className={joinClassNames(styles.flexCol, styles.gap24, styles.alignStart)}>
                  <Icon src="/team.svg" size="lg" color="purple" />
                  <div className={styles.textXl}>
                    Experienced gaming teams with chemistry and passion for their vision.
                  </div>
                </div>
                <div className={joinClassNames(styles.flexCol, styles.gap24, styles.alignStart)}>
                  <Icon src="/bolt.svg" size="lg" color="purple" />
                  <div className={styles.textXl}>
                    Teams that can iterate quickly based on data driven insights.
                  </div>
                </div>
                <div className={joinClassNames(styles.flexCol, styles.gap24, styles.alignStart)}>
                  <Icon src="/phone.svg" size="lg" color="purple" />
                  <div className={styles.textXl}>
                    Founders who use Telegram’s engagement tools to push the boundaries of game design.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={joinClassNames(styles.container)}>
          <div className={styles.centeredFlex}>
            <div className={styles.bottom}>
              <div className={joinClassNames(styles.bottomCaption, styles.textPurple)}>
                Lead the next wave
                <br /> of Telegram games
              </div>
              <div className={styles.bottomCenter}>
                <IconLink
                  text="Apply"
                  size="lg"
                  href="https://airtable.com/appXnUdjNS7Fzxpq7/pagWSQDZwdqEVDv01/form"
                  icon="./arrow.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className={joinClassNames(styles.footerWrapper)}>
        <div className={joinClassNames(styles.container)}>
          <div className={styles.footer}>
            <div className={joinClassNames(styles.centeredFlex, styles.gap10)}>
              <Image src="/logo.svg" alt="" width={28} height={23} />
              <div className={styles.footerText}>Telegram Gaming</div>
            </div>
            {/*<div className={joinClassNames(styles.centeredFlex, styles.gap32)}>*/}
            {/*  <Link className={styles.link} href="#tools">*/}
            {/*    Tools*/}
            {/*  </Link>*/}
            {/*  <Link className={styles.link} href="#solutions">*/}
            {/*    Solutions*/}
            {/*  </Link>*/}
            {/*  <Link className={styles.link} href="#partners">*/}
            {/*    Partners*/}
            {/*  </Link>*/}
            {/*</div>*/}
            <div className={joinClassNames(styles.centeredFlex, styles.gap24)}>
              <Link
                className={styles.helikaLogoWrapper}
                href="https://helika.io"
                target="_blank"
              >
                <Image
                  src="/helika-logo.svg"
                  alt=""
                  fill
                  className={styles.helikaLogo}
                />
              </Link>
              <div className={styles.centeredFlex}>
                <Image src="/notcoin-logo.svg" alt="" width={24} height={24} />
                <Link
                  href="https://notco.in"
                  target="_blank"
                  className={styles.notcoinFooter}
                >
                  Notcoin
                </Link>
              </div>
            </div>
          </div>
          <Sns style={styles.footerSns} />
        </div>
      </footer>
    </>
  );
}
