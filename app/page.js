import Image from "next/image";
import styles from "./page.module.css";
import IconLink from "@/components/icon-link/IconLink";
import Button from "@/components/button/Button";
import { joinClassNames } from "@/utils/join-class-names";
import Link from "next/link";
import Sns from "@/components/sns/Sns";
import Icon from "@/components/icon/Icon";

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

          <div className={joinClassNames(styles.block, styles.hFull)}>
            <div className={joinClassNames(styles.container, styles.centeredFlex)}>
              <div className={joinClassNames(styles.flexRow, styles.w780)}>
                <Image
                  src="/logo-3d.png"
                  alt=""
                  width={320}
                  height={346}
                />
                <div className={styles.textXl}>
                  TGA is a Helika operated early stage accelerator for gaming studios looking to capitalize on the greenfield opportunity of the Telegram platform.
                  <br /> <br />
                  Our intensive 10-week program focuses on product testing and iterative development, and is designed to help studios rapidly improve their games as they prepare to launch their titles.
                </div>
              </div>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.container}>
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

          <div
            className={joinClassNames(
              styles.block,
              styles.mt110
            )}
          >
            <div
              className={joinClassNames(
                styles.container,
                styles.grid3,
                styles.colGap48,
                styles.centeredGridBlock
              )}
            >
              <div className={styles.mobileTextCenter}>
              <Image src="/telegram.svg" alt="" width={36} height={36} />
                <div
                  className={joinClassNames(
                    styles.caption,
                    styles.mobileTextCenter
                  )}
                >
                  Help you scale your
                  <br />
                  unique game
                  <br />
                  to Telegram’s massive
                  <br />
                  audiences
                </div>
              </div>
              <div className={styles.mobileTextCenter}>
                <Image src="/gear-outline.svg" alt="" width={36} height={36} />
                <div
                  className={joinClassNames(
                    styles.caption,
                    styles.mobileTextCenter
                  )}
                >
                  Technical and
                  <br />
                  analytical expertise
                </div>
              </div>
              <div className={styles.mobileTextCenter}>
                <Image src="/megaphone.svg" alt="" width={36} height={36} />
                <div
                  className={joinClassNames(
                    styles.caption,
                    styles.mobileTextCenter
                  )}
                >
                  Providing go-to-market
                  <br />
                  strategy, user
                  <br />
                  acquisition solutions
                </div>
              </div>
            </div>
            {/*<div*/}
            {/*  className={joinClassNames(*/}
            {/*    styles.container,*/}
            {/*    styles.blueBox1,*/}
            {/*    styles.mt240*/}
            {/*  )}*/}
            {/*  id="tools"*/}
            {/*>*/}
            {/*  <div className={styles.mx54}>*/}
            {/*    <div*/}
            {/*      className={joinClassNames(styles.title, styles.textCenter)}*/}
            {/*    >*/}
            {/*      Innovative tools*/}
            {/*    </div>*/}
            {/*    <div*/}
            {/*      className={joinClassNames(*/}
            {/*        styles.grid3,*/}
            {/*        styles.gridBlock56,*/}
            {/*        styles.mt74*/}
            {/*      )}*/}
            {/*    >*/}
            {/*      <div className={styles.z2}>*/}
            {/*        <div className={styles.subtitle}>Community</div>*/}
            {/*        <div className={joinClassNames(styles.text, styles.mt18)}>*/}
            {/*          Telegram native toolset for easy access to a 900M active*/}
            {/*          audience. 500+ user-acquisition campaigns.*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*      <div className={styles.z2}>*/}
            {/*        <div className={styles.subtitle}>Tonstarter</div>*/}
            {/*        <div className={joinClassNames(styles.text, styles.mt18)}>*/}
            {/*          The launchpad platform designed to support projects on The*/}
            {/*          Open Network (TON)*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*      <div />*/}
            {/*      <div className={styles.z2}>*/}
            {/*        <div className={styles.subtitle}>Early</div>*/}
            {/*        <div className={joinClassNames(styles.text, styles.mt18)}>*/}
            {/*          A tool for win-win collaborations between projects and*/}
            {/*          their early adopters*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*      <div className={styles.z2}>*/}
            {/*        <div className={styles.subtitle}>TokenTable</div>*/}
            {/*        <div className={joinClassNames(styles.text, styles.mt18)}>*/}
            {/*          An on-chain token management platform that allows to*/}
            {/*          conduct token sales, airdrops, vesting and unlocking*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*      <div />*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*  <div className={joinClassNames(styles.divider, styles.mt90)} />*/}
            {/*  <div className={styles.mx54}>*/}
            {/*    <div className={joinClassNames(styles.mt90, styles.subtitle)}>*/}
            {/*      Helika*/}
            {/*    </div>*/}
            {/*    <div*/}
            {/*      className={joinClassNames(*/}
            {/*        styles.grid3,*/}
            {/*        styles.gridBlock37,*/}
            {/*        styles.mt20*/}
            {/*      )}*/}
            {/*    >*/}
            {/*      <div>*/}
            {/*        <div className={styles.textSemibold}>Game Management</div>*/}
            {/*        <div className={styles.text}>*/}
            {/*          In-game analytics, LiveOps, A/B Testing, and Discord*/}
            {/*          Support Portal*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*      <div>*/}
            {/*        <div className={styles.textSemibold}>*/}
            {/*          Marketing & Growth Analytics*/}
            {/*        </div>*/}
            {/*        <div className={styles.text}>*/}
            {/*          Everything you need to grow your game, including Deep*/}
            {/*          Funnel*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*      <div />*/}
            {/*      <div>*/}
            {/*        <div className={styles.textSemibold}>*/}
            {/*          On-Chain Analytics*/}
            {/*        </div>*/}
            {/*        <div className={styles.text}>*/}
            {/*          Track everything on-chain, including your on-chain token*/}
            {/*          and NFT*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*      <div>*/}
            {/*        <div className={styles.textSemibold}>*/}
            {/*          AI Optimize Engine*/}
            {/*        </div>*/}
            {/*        <div className={styles.text}>*/}
            {/*          Programmatically optimize your game*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*      <div />*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*  <Image*/}
            {/*    className={styles.pixels1}*/}
            {/*    src="/pixels1.png"*/}
            {/*    alt=""*/}
            {/*    width={414}*/}
            {/*    height={546}*/}
            {/*  />*/}
            {/*</div>*/}
            {/*<Button*/}
            {/*  text="Apply"*/}
            {/*  href="https://airtable.com/appXnUdjNS7Fzxpq7/pagWSQDZwdqEVDv01/form"*/}
            {/*  newTab*/}
            {/*  className={styles.mt66}*/}
            {/*/>*/}
            <div
              className={joinClassNames(
                styles.container,
                styles.block,
                styles.blueBox2,
                styles.mt240
              )}
            >
              <div className={joinClassNames(styles.title, styles.z2)}>
                Who we are looking for?
              </div>
              <div
                className={joinClassNames(
                  styles.grid3,
                  styles.gap50,
                  styles.mt50
                )}
              >
                <div className={joinClassNames(styles.gridBlock25, styles.z2)}>
                  <Image src="./team.svg" alt="" width={36} height={36} />
                  <div>
                    <div className={styles.textXl}>
                      Experienced teams with<br />
                      chemistry and passion for<br />
                      their gaming vision.
                    </div>
                  </div>
                </div>
                <div className={styles.gridBlock25}>
                  <Image src="./lightning.svg" alt="" width={32} height={32} />
                  <div>
                    <div className={styles.textXl}>
                      Teams who can iterate<br />
                      quickly based on data<br />
                      driven insights.
                    </div>
                  </div>
                </div>
                <div className={styles.gridBlock25}>
                  <Image src="./phone.svg" alt="" width={36} height={36} />
                  <div>
                    <div className={styles.textXl}>
                      Developers who are excited<br />by bold new ideas, and<br />
                      creative uses for Telegram<br />
                      mini games.
                    </div>
                  </div>
                </div>
              </div>
              {/*<Button*/}
              {/*  text="Apply"*/}
              {/*  color="white"*/}
              {/*  href="https://airtable.com/appXnUdjNS7Fzxpq7/pagWSQDZwdqEVDv01/form"*/}
              {/*  newTab*/}
              {/*  className={styles.mt60}*/}
              {/*/>*/}
              <Image
                className={styles.pixels2}
                src="/pixels2.png"
                alt=""
                width={283}
                height={472}
              />
            </div>
          </div>
          {/*<div*/}
          {/*  className={joinClassNames(*/}
          {/*    styles.block,*/}
          {/*    styles.heroBackground,*/}
          {/*    styles.pb255*/}
          {/*  )}*/}
          {/*  id="solutions"*/}
          {/*>*/}
          {/*  <div className={styles.planeContainer}>*/}
          {/*    <div className={styles.plane}>*/}
          {/*      <Image src="/logo.svg" alt="" fill />*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className={styles.container}>*/}
          {/*    <div*/}
          {/*      className={joinClassNames(*/}
          {/*        styles.title,*/}
          {/*        styles.textPurple,*/}
          {/*        styles.textCenter,*/}
          {/*        styles.mt230,*/}
          {/*        styles.mobileTextLeft*/}
          {/*      )}*/}
          {/*    >*/}
          {/*      What can you expect?*/}
          {/*    </div>*/}
          {/*    <div*/}
          {/*      className={joinClassNames(*/}
          {/*        styles.grid3,*/}
          {/*        styles.rowGap64,*/}
          {/*        styles.mt91*/}
          {/*      )}*/}
          {/*    >*/}
          {/*      <div className={styles.subtitle}>Funding Guidance</div>*/}
          {/*      <div>*/}
          {/*        <div className={styles.textBold}>*/}
          {/*          Helika Ventures*/}
          {/*        </div>*/}
          {/*        <div className={styles.text}>*/}
          {/*          Teams will be given a chance to pitch the results of their */}
          {/*          game performance to partners in the Helika network.*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*      <div className={styles.mobileNone} />*/}
          {/*    </div>*/}
          {/*    <div className={joinClassNames(styles.divider, styles.mt70)} />*/}
          {/*    <div*/}
          {/*      className={joinClassNames(*/}
          {/*        styles.grid3,*/}
          {/*        styles.rowGap64,*/}
          {/*        styles.mt91*/}
          {/*      )}*/}
          {/*    >*/}
          {/*      <div className={styles.subtitle}>Go-to-Market</div>*/}
          {/*      <div className={styles.gridBlock64}>*/}
          {/*        <div>*/}
          {/*          <div className={styles.textBold}>*/}
          {/*            User Acquisition Support*/}
          {/*          </div>*/}
          {/*          <div className={styles.text}>*/}
          {/*            50K click UA Campaign to the approved game for the test*/}
          {/*            period*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*        <div>*/}
          {/*          <div className={styles.textBold}>*/}
          {/*            Notcoin Explore Campaigns*/}
          {/*          </div>*/}
          {/*          <div className={styles.text}>*/}
          {/*            Accelerate user adoption through engagement tools with*/}
          {/*            over 40 million users*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*        <div>*/}
          {/*          <div className={styles.textBold}>*/}
          {/*            Community of Key Opinion Leaders*/}
          {/*          </div>*/}
          {/*          <div className={styles.text}>*/}
          {/*            To promote projects within the TON ecosystem*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*      <div className={styles.gridBlock64}>*/}
          {/*        <div>*/}
          {/*          <div className={styles.textBold}>Early Incubation</div>*/}
          {/*          <div className={styles.text}>*/}
          {/*            Engage with early adapters for product testing, feedback,*/}
          {/*            and growth*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*        <div>*/}
          {/*          <div className={styles.textBold}>*/}
          {/*            Priority Launch on Community Platform*/}
          {/*          </div>*/}
          {/*          <div className={styles.text}>*/}
          {/*            Receive access to a premier launch platform in the TON*/}
          {/*            ecosystem*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*        <div>*/}
          {/*          <div className={styles.textBold}>Gaming and Blockchain</div>*/}
          {/*          <div className={styles.text}>*/}
          {/*            Connections:Access to Notcoin and Helika partners and*/}
          {/*            influencer networks*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className={joinClassNames(styles.divider, styles.mt83)} />*/}
          {/*    <div*/}
          {/*      className={joinClassNames(*/}
          {/*        styles.grid3,*/}
          {/*        styles.rowGap64,*/}
          {/*        styles.mt122*/}
          {/*      )}*/}
          {/*    >*/}
          {/*      <div className={styles.subtitle}>*/}
          {/*        Technical & <br />*/}
          {/*        Analytical <br />*/}
          {/*        Support*/}
          {/*      </div>*/}
          {/*      <div className={styles.gridBlock64}>*/}
          {/*        <div>*/}
          {/*          <div className={styles.textBold}>Advanced Analytics</div>*/}
          {/*          <div className={styles.text}>*/}
          {/*            Use an AI-powered suite of products for game studios to*/}
          {/*            improve player engagement, retention, and monetization*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*        <div>*/}
          {/*          <div className={styles.textBold}>Workshops</div>*/}
          {/*          <div className={styles.text}>*/}
          {/*            Join specialized workshops including LiveOps, Growth, and*/}
          {/*            Analytics*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*      <div className={styles.gridBlock64}>*/}
          {/*        <div>*/}
          {/*          <div className={styles.textBold}>*/}
          {/*            Exclusive Discounts for Full Access to Helika Solution Suite*/}
          {/*          </div>*/}
          {/*          <div className={styles.text}>*/}
          {/*            Including Helika Game Management, Product Analytics, and*/}
          {/*            UA Tooling*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*        <div>*/}
          {/*          <div className={styles.textBold}>*/}
          {/*            Advanced Technical Support*/}
          {/*          </div>*/}
          {/*          <div className={styles.text}>*/}
          {/*            Use our expertise and mentorship to help your game*/}
          {/*            leverage the TON blockchain’s capabilities*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <Button*/}
          {/*      text="Apply"*/}
          {/*      href="https://airtable.com/appXnUdjNS7Fzxpq7/pagWSQDZwdqEVDv01/form"*/}
          {/*      newTab*/}
          {/*      className={joinClassNames(styles.mt144, styles.mxAuto)}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div*/}
          {/*  className={joinClassNames(*/}
          {/*    styles.container,*/}
          {/*    styles.block,*/}
          {/*    styles.mt110*/}
          {/*  )}*/}
          {/*  id="partners"*/}
          {/*>*/}
          {/*  <div className={joinClassNames(styles.title, styles.textPurple)}>*/}
          {/*    Partners*/}
          {/*  </div>*/}
          {/*  <div*/}
          {/*    className={joinClassNames(*/}
          {/*      styles.grid2,*/}
          {/*      styles.colGap20,*/}
          {/*      styles.centeredGridBlock,*/}
          {/*      styles.mt100*/}
          {/*    )}*/}
          {/*  >*/}
          {/*    <div>*/}
          {/*      <Image src="./ton-icon.svg" alt="" width={147} height={134} />*/}
          {/*      <div className={styles.mt40}>*/}
          {/*        <div>*/}
          {/*          <span*/}
          {/*            className={joinClassNames(*/}
          {/*              styles.subtitle,*/}
          {/*              styles.textPurple*/}
          {/*            )}*/}
          {/*          >*/}
          {/*            Notcoin*/}
          {/*          </span>*/}
          {/*        </div>*/}
          {/*        <div className={joinClassNames(styles.textXXL, styles.mt10)}>*/}
          {/*          <span className={styles.textXXLBold}>40M+</span> Users*/}
          {/*          <br />*/}
          {/*          <span className={styles.textXXLBold}>10M+</span> Holders*/}
          {/*          <br />*/}
          {/*          Extensive Experience*/}
          {/*          <br />*/}
          {/*          in launching over 150 campaigns*/}
          {/*          <br />*/}
          {/*          on TON*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <Image*/}
          {/*        src="./helika-icon.svg"*/}
          {/*        alt=""*/}
          {/*        width={147}*/}
          {/*        height={134}*/}
          {/*      />*/}
          {/*      <div className={styles.mt40}>*/}
          {/*        <div>*/}
          {/*          <span*/}
          {/*            className={joinClassNames(*/}
          {/*              styles.subtitle,*/}
          {/*              styles.textPurple*/}
          {/*            )}*/}
          {/*          >*/}
          {/*            Helika*/}
          {/*          </span>*/}
          {/*        </div>*/}
          {/*        <div className={joinClassNames(styles.textXXL, styles.mt10)}>*/}
          {/*          <span className={styles.textXXLBold}>15+</span> Years in Web*/}
          {/*          3<br />*/}
          {/*          <span className={styles.textXXLBold}>25+</span> Years in*/}
          {/*          Gaming*/}
          {/*          <br />*/}
          {/*          <span className={styles.textXXLBold}>10+</span> Years in*/}
          {/*          Venture Funding*/}
          {/*          <br />*/}
          {/*          <span className={styles.textXXLBold}>250+</span> Global*/}
          {/*          Industry Connections*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  /!* <Button*/}
          {/*    text="Apply"*/}
          {/*    href="https://airtable.com/appXnUdjNS7Fzxpq7/pagWSQDZwdqEVDv01/form"*/}
          {/*    newTab*/}
          {/*    className={styles.mt122}*/}
          {/*  /> *!/*/}
          {/*</div>*/}
          {/*<div*/}
          {/*  className={joinClassNames(*/}
          {/*    styles.container,*/}
          {/*    styles.block,*/}
          {/*    styles.mt110*/}
          {/*  )}*/}
          {/*  id="cohort-success-stories"*/}
          {/*>*/}
          {/*  <div className={joinClassNames(styles.title, styles.textPurple)}>*/}
          {/*    Cohort Success Stories*/}
          {/*  </div>*/}
          {/*  <div className={joinClassNames(styles.flexRow, styles.mt75)}>*/}
          {/*    <Image src="/catizen-logo.png" alt="" width={200} height={58} />*/}
          {/*    <Image src="/dogs-logo.png" alt="" width={115} height={108} />*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
        <div className={joinClassNames(styles.container, styles.bottom)}>
          <div
            className={joinClassNames(styles.bottomCaption, styles.textPurple)}
          >
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
            </div>
          </div>
          <Sns style={styles.footerSns} />
        </div>
      </footer>
    </>
  );
}
