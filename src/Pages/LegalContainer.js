import React, { useState } from "react";
import { Grid, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    legal: {
        width: "100%",
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 12,
        textAlign: "justify",
        minHeight: "calc(100vh - 100px)",
        maxHeight: "calc(100vh - 100px)",
        borderLeft: "1px solid black",
        overflow: "scroll",
    },
}));

export default function LegalContainer() {
    const [activeTab, setActiveTab] = useState("About");
    const classes = useStyles();
    const About = () => {
        return (
            <Grid
                container
                direction="column"
                className={ classes.legal }
            >
                <h1 style={{ fontWeight: "bold" }}>About Lgcy</h1>
                <p>
                    Lgcy lets you share your story the way you would like it to be shared.
                    Lgcy allows you to share your life's purpose, your journey, the things
                    that mean most to you and what you are about.
                    Post text, videos, photos, quotes, links and music from your browser, phone or desktop.
        </p>
                <p>
                    Lgcy allows businesses to share who they are, what they stand for and
                    what their purpose is in the world. Lgcy allows your customers to come
                    behind the scenes and understand what your organization is about, your
                    journey, how you go about your business and what motivates you to do
                    what you do in the world. Use Lgcy to construct your brand and form an
                    everlasting bond between your customers and your organization.{" "}
                </p>
                <p><b>Welcome to lgcy!</b></p>
            </Grid>
        );
    };
    const CommunityGuidelines = () => {
        return (
            <Grid
                container
                className={classes.legal}
            >
                <h1 style={{ fontWeight: "bold" }}>
                    Community Guidelines{" "}
                </h1>
                <p><b>Last update: January 1, 2021</b>
                <br /><br />
                    As a global platform for self-expression, Lgcy is committed to supporting and protecting freedom of speech. Coincidentally, we draw lines around defined categories of content and behavior that jeopardize our users, threaten our infrastructure and damage our community.
        </p>
                <p style={{ fontWeight: "bold" }}>What Lgcy is for:</p>
                <p>
                    Lgcy encourages self-expression and to share your life story. We want
                    you to express yourself freely and use Lgcy to reflect who you are,
                    what you love and what you stand for, publicly or privately, with your
                    friends, family and the world if you so choose.
        </p>{" "}
                <p style={{ fontWeight: "bold" }}>What the Lgcy platform is not for:</p>
                <ul>
                    <li>
                        <b>Harm to Minors.</b> It is prohibited to post or solicit anything
                        relating to minors that is sexually suggestive or violent in any
                        manner.
          </li>
                    <li>
                        <b>Malicious Speech.</b> It is prohibited to encourage violence or hatred.
                        Don't make violent threats or statements that incite violence,
                        including threatening or promoting terrorism. It is prohibited to do
                        so on the basis of race, ethnic origin, religion, disability,
                        gender, gender identity, age, veteran status, or sexual orientation.
          </li>
                    <li>
                        <b>Promotion or Glorification of Self-Harm.</b> It is prohibited to post
                        content that actively promotes self-harm. This includes content that
                        encourages others to: cut or injure themselves; embrace anorexia,
                        bulimia, or other eating disorders, or commit suicide.
          </li>
                    <li>
                        <b>Gore, Mutilation, Bestiality, or Necrophilia.</b> Gore is not acceptable
                        on the platform. It is prohibited to showcase the mutilation or
                        torture of human beings, animals, or their remains.
          </li>{" "}
                    <li>
                        <b>Uploading Sexually Explicit Video.</b> No nude content can be shared
                        publicly, all nude content must be private.
          </li>
                    <li>
                        <b>Deceptive or Fraudulent Links.</b> It is prohibited to post deceptive or
                        fraudulent links on the platform
          </li>
                    <li>
                        <b>Spam.</b> It is prohibited to post any spam of any kind on the platform
                        that will mislead or deceive users.
          </li>
                    <li>
                        <b>Copyright or Trademark Infringement.</b> Respect the copyrights and
                        trademarks of others. Don't post content if you aren't allowed to
                        use someone else's copyrighted or trademarked work (either by
                        license or by legal exceptions and limitations such as fair use),
          </li>
                    <li>
                        <b>Intellectual property.</b> We respond to notices of alleged copyright
                        infringement as per our Terms of Service. Parties asserting a
                        trademark infringement claim should identify the allegedly
                        infringing work and the legal basis for their claim, and include the
                        registration and/or application number(s) pertaining to their
                        trademark. Each claim is reviewed by a trained member of our Trust
                        and Safety team.
          </li>
                    <li>
                        <b>Repeat copyright infringement.</b> We use a three-strike system to
                        evaluate the standing of a user's account, where, each valid
                        copyright infringement notice constitutes a strike, and three
                        strikes results in the termination of a user's account.
          </li>
                    <li>
                        <b>Unlawful Uses or Content.</b> It is prohibited to use Lgcy to conduct
                        any illegal behavior.
          </li>
                    <li><b>Impersonation.</b> Do not impersonate any person or business</li>
                    <li>
                        <b>Harassment.</b> It is prohibited to engage in targeted abuse or harassment.
          </li>
                    <li>
                        <b>Privacy Violations.</b> Lgcy is not to be used deceptively to obtain
                        personal information. Don't post content that violates anyone's
                        privacy, especially personally identifying or confidential
                        information like credit card numbers, social security numbers, or
                        unlisted contact information.
          </li>{" "}
                    <li>
                        <b>Disruptions, Exploits, or Resource Abuse.</b> It is prohibited to
                        attempt unauthorized use, disruption, or exploitation of lgcy.com or
                        our other products and services, or otherwise abuse Lgcy's
                        resources.
          </li>
                </ul>
                <p>
                    If we come to the conclusion that you are violating these guidelines,
                    you may receive a notice via email. If you don't explain or correct
                    your behavior, we may take action against your account. In all cases
                    we reserve the right to suspend accounts, remove content without
                    notice for any reason. We reserve the right to enforce, or not
                    enforce, these guidelines in our sole discretion, and these guidelines
                    don't create a duty or contractual obligation for us to act in any
                    particular manner.<br />
        </p>
                <p> You can report violations of these guidelines to us directly.
                    You can remove your own content at your own discretion.
                    We also reserve the right to amend these guidelines using the procedures set forth in our Terms of Service.
                    If you have questions or feedback, don't hesitate to let us know.<br /><br />
                    <b>Alas, Welcome to Lgcy!</b></p>
            </Grid>
        );
    };
    const TermsOfUse = () => {
        return (
            <Grid
                container
                className={classes.legal}
            >
                <h1 style={{ fontWeight: "bold" }}>Terms of Use</h1>
                <p style={{ fontWeight: "bold", width: "100%" }}>
                    These Terms of Use are effective on January 1, 2021
        </p>
                <p>
                    By accessing the Lgcy website or any applications (including mobile
                    applications) made available by Lgcy (together, the "Service"), you
                    agree to be bound by these terms of use ("Terms of Use"). The Service
          is owned and governed by Lgcy, ("Lgcy").{" "}
                    <strong>
                        These Terms of Use affect your legal rights and obligations. If you
                        do not agree to be bound by these Terms of Use, do not access the
                        Service.
          </strong>
                </p>
                <strong>
                    ARBITRATION NOTICE: YOU AGREE THAT DISPUTES BETWEEN YOU AND LGCY WILL
                    BE RESOLVED BY BINDING, INDIVIDUAL ARBITRATION AND YOU WAIVE YOUR
                    RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE
                    ARBITRATION.
        </strong>
                <strong><br />Basic Terms</strong>
                <ol>
                    <li>You must be at least 13 years of age to use the Service.</li>
                    <li>
                        It is prohibited to post violent, nude (publicly), partially nude
                        (publicly), discriminatory, unlawful, infringing, hateful,
                        pornographic (publicly) or sexually suggestive photos (publicly) or
                        other content via the Service. Nude content may be posted privately.
          </li>
                    <li>
                        You are responsible for any activity that occurs through your
                        account and you agree you will not sell, transfer, license or assign
                        your account, followers, username, or any account rights. With the
                        exception of people or businesses that are expressly authorized to
                        create accounts on behalf of their employers or clients, Lgcy
                        prohibits the creation of and that you will not create an account
                        for anyone other than yourself. You also represent that all
                        information you provide or provided to Lgcy upon registration and at
                        all other times will be true, accurate, current and complete and you
                        agree to update your information as necessary to maintain its truth
                        and accuracy.
          </li>
                    <li>
                        It is prohibited to solicit, collect or use the login credentials of
                        other Lgcy users.
          </li>
                    <li>
                        You are responsible for keeping your password secret and secure.
          </li>
                    <li>
                        It is prohibited to stalk, bully, abuse, harass, threaten,
                        impersonate or intimidate people or entities on the platform and
                        users are prohibited to post private or confidential information via
                        the Service, including, without limitation, your or any other
                        person's credit card information, social security or alternate
                        national identity numbers, non-public phone numbers or non-public
                        email addresses.
          </li>
                    <li>
                        It is prohibited to use the Service for any illegal or unauthorized
                        purpose.
          </li>
                    <li>
                        You are solely responsible for your conduct and any data, text,
                        files, information, usernames, images, graphics, photos, profiles,
                        audio, video clips, sounds, musical works, works of authorship,
                        applications, links and other content or materials (collectively,
                        "Content") that you submit, post or display on or via the Service.
          </li>
                    <li>
                        It is prohibited to change, modify or alter the Service or change,
                        modify or alter another website so as to falsely imply that it is
                        associated with the Service or Lgcy.
          </li>
                    <li>
                        It is prohibited to access Lgcy's private API by means other than
                        those permitted by Lgcy. Use of Lgcy's API is subject to a separate
                        set of terms.
          </li>
                    <li>
                        It is prohibited to create or send unwanted email, comments, likes
                        or other forms of commercial or harassing communications to any
                        users on Lgcy.
          </li>
                    <li>
                        It is prohibited to disrupt the Service, servers or networks
                        connected to the Service, by transmitting any worms, viruses,
                        spyware, malware or any other code of a destructive or disruptive
                        nature. It is prohibited to inject content or code or otherwise alter
                        or interfere with the way any Lgcy page is rendered or displayed in
                        a user's browser or device.
          </li>
                    <li>You must comply with Lgcy's Community Guidelines</li>
                    <li>
                        It is prohibited to create accounts with the Service through
                        unauthorized means, including but not limited to, by using an
                        automated device, script, bot, spider, crawler or scraper.
          </li>
                    <li>
                        Violation of these Terms of Use may, in Lgcy's sole discretion,
                        result in termination of your Lgcy account. You understand and agree
                        that Lgcy cannot and will not be responsible for the Content posted
                        on the Service and you use the Service at your own risk. If you
                        violate the letter or spirit of these Terms of Use, or otherwise
                        create risk or possible legal exposure for Lgcy, we can stop
                        providing all or part of the Service to you.
          </li>
                </ol>
                <p style={{ fontWeight: "bold" }}>General Conditions</p>
                <ol>
                    <li>
                        Lgcy reserves the right to modify or terminate the Service or your
                        access to the Service for any reason, without notice, at any time,
                        and without liability to you. You can deactivate your Lgcy account
                        by logging into the Service and complete the deactivation process.
                        If we terminate your access to the Service or you use the form
                        detailed above to deactivate your account, your photos, comments,
                        likes, friendships, and all other data will no longer be accessible
                        through your account, but those materials and data may persist and
                        appear within the Service.
          </li>
                    <li>
                        Upon termination, all licenses and other rights granted to you in
                        these Terms of Use will immediately cease.
          </li>
                    <li>
                        Lgcy reserves the right, in our sole discretion, to change these
                        Terms of Use <b>("Updated Terms")</b>. Unless we make a change for legal or
                        administrative reasons, we will provide reasonable advance notice
                        before the Updated Terms become effective. You agree that we may
                        notify you of the Updated Terms by posting them on the Service, and
                        that your use of the Service after the effective date of the Updated
                        Terms (or engaging in such other conduct as we may reasonably
                        specify) constitutes your agreement to the Updated Terms. You should
                        review these Terms of Use and any Updated Terms before using the
                        Service. The Updated Terms will be effective as of the time of
                        posting, or such later date as may be specified in the Updated
                        Terms, and will apply to your use of the Service from that point
                        forward. These Terms of Use will govern any disputes arising before
                        the effective date of the Updated Terms.
          </li>
                    <li>
                        Lgcy reserves the right to refuse access to the Service to anyone
                        for any reason at any time
          </li>
                    <li>
                        Lgcy may remove, edit, block, and/or monitor Content or accounts
                        containing Content that Lgcy determines in our sole discretion
                        violates these Terms of Use.
          </li>
                    <li>
                        You are solely responsible for your interaction with other users of
                        the Service, whether online or offline. You agree that Lgcy is not
                        responsible or liable for the conduct of any user. Lgcy reserves the
                        right, but has no obligation, to monitor or become involved in
                        disputes between you and other users.
          </li>
                    <li>
                        There may be links from the Service, or from communications you
                        receive from the Service, to third-party web sites or features. Lgcy
                        does not control any of these third-party web services or any of
                        their content. You acknowledge and agree that Lgcy is in no way
                        responsible or liable for any such third-party services or features.
                        YOUR CORRESPONDENCE AND BUSINESS DEALINGS WITH THIRD PARTIES FOUND
                        THROUGH THE SERVICE ARE SOLELY BETWEEN YOU AND THE THIRD PARTY. You
                        may choose, at your sole and absolute discretion and risk, to use
                        applications that connect the Service or your profile on the Service
                        with a third-party service (each, an "Application") and such
                        Application may interact with, connect to or gather and/or pull
                        information from and to your Service profile. By using such
                        Applications, you acknowledge and agree to the following: (i) if you
                        use an Application to share information, you are consenting to
                        information about your profile on the Service being shared; (ii)
                        your use of an Application may cause personally identifying
                        information to be publicly disclosed and/or associated with you,
                        even if Lgcy has not itself provided such information; and (iii)
                        your use of an Application is at your own option and risk, and you
                        will hold the Lgcy Parties (defined below) harmless for activity
                        related to the Application.
          </li>
                    <li>
                        You agree that you are responsible for all data charges you incur
                        through use of the Service.
          </li>
                    <li>
                        Lgcy prohibits crawling, scraping, caching or accessing any content
                        on the Service via automated means, including but not limited to,
                        user profiles, photos, videos, texts, gifs, links, audio and quotes.
          </li>
                </ol>
                <p style={{ fontWeight: "bold" }}>Rights</p>
                <ol>
                    <li>
                        Lgcy does not claim ownership of any Content that you post on or
                        through the Service. You hereby grant to Lgcy a non-exclusive, fully
                        paid and royalty-free, transferable, sub-licensable, worldwide
                        license to use the Content that you post on or through the Service,
                        subject to the Service's Privacy Policy, available here including
                        but not limited to sections "Sharing of Your Information", "How We
                        Store Your Information", and "Your Choices About Your Information".
                        You can choose who can view your Content and activities with your
                        timeline(s), including your photos, videos, text or any other
                        content you upload on the platform as described in the Privacy
                        Policy.
          </li>
                    <li>
                        Parts of the Service are supported by advertising revenue and may
                        display advertisements and promotions, and you hereby agree that
                        Lgcy may place such advertising and promotions on the Service or on,
                        about, or in conjunction with your Content. The manner, mode and
                        extent of such advertising and promotions are subject to change
                        without specific notice to you.
          </li>
                    <li>
                        You acknowledge that Lgcy may not always identify paid services,
                        sponsored content, or commercial communications as such.
          </li>
                    <li>
                        You represent and warrant that: (i) you own the Content posted by
                        you on or through the Service or otherwise have the right to grant
                        the rights and licenses set forth in these Terms of Use; (ii) the
                        posting and use of your Content on or through the Service does not
                        violate, misappropriate or infringe on the rights of any third
                        party, including, without limitation, privacy rights, publicity
                        rights, copyrights, trademark and/or other intellectual property
                        rights; (iii) you agree to pay for all royalties, fees, and any
                        other monies owed by reason of Content you post on or through the
                        Service; and (iv) you have the legal right and capacity to enter
                        into these Terms of Use in your jurisdiction.
          </li>
                
                    <li>
                        The Service contains content owned or licensed by Lgcy ("Lgcy Content"). Lgcy Content is protected by copyright, trademark, patent, trade secret and other laws, and, as between you and Lgcy, Lgcy owns and retains all rights in the Lgcy Content and the Service. You will not remove, alter or conceal any copyright, trademark, service mark or other proprietary rights notices incorporated in or accompanying the Lgcy Content and you will not reproduce, modify, adapt, prepare derivative works based on, perform, display, publish, distribute, transmit, broadcast, sell, license or otherwise exploit the Lgcy Content.
                    </li>
                    <li>
                        It is Lgcy's intention for the Service to be available as much as possible, however, there will be occasions when the Service may be interrupted, including, without limitation, for scheduled maintenance or upgrades, for emergency repairs, or due to failure of telecommunications links and/or equipment.
                        </li>
                    <li>
                        Lgcy reserves the right to remove any Content from the Service for any reason, without prior notice. Content removed from the Service may continue to be stored by Lgcy, including, without limitation, in order to comply with certain legal obligations, but may not be retrievable without a valid court order. Lgcy encourages its users to maintain their own backup of their Content. Lgcy is not a backup service and users will not rely on the Service for the purposes of Content backup or storage. Lgcy will not be liable for any modification, suspension, or discontinuation of the Services, or the loss of any Content. The Internet may be subject to breaches of security and that the submission of Content or other information may not be secure.
                        </li>
                    <li>
                        Lgcy does not hold any obligation to prescreen, monitor, edit, or remove any Content. If your Content violates these Terms of Use, you may bear legal responsibility for that Content.
                        </li>
                    <li>
                        Except as otherwise described in the Service's Privacy Policy, as between you and Lgcy, any Content will be non-confidential and non-proprietary and we will not be liable for any use or disclosure of Content. You acknowledge and agree that your relationship with Lgcy is not a confidential, fiduciary, or other type of special relationship, and that your decision to submit any Content does not place Lgcy in a position that is any different from the position held by members of the general public, including with regard to your Content. None of your Content will be subject to any obligation of confidence on the part of Lgcy, and Lgcy will not be liable for any use or disclosure of any Content you provide.
                    </li>
                    <li>
                        It is Lgcy's policy not to accept content, information, ideas, suggestions or other materials other than those we have specifically requested and to which certain specific terms, conditions and requirements may apply. If, despite our policy, you choose to send us content, information, ideas, suggestions, or other materials, you further agree that Lgcy is free to use any such content, information, ideas, suggestions or other materials, for any purposes whatsoever, including, without limitation, developing and marketing products and services, without any liability or payment of any kind to you.
                    </li>
                </ol>
                <strong>Reporting Copyright and Other IP Violations</strong> 
                <ol>
                    <li>
                        Lgy respects other people's rights and ensures that all its users do the same.
                    </li>
                    <li>
                        Lgcy provides its users with tools to help protect their intellectual property rights.
                    </li>
                    <li>
                        If users repeatedly infringe other people's intellectual property rights under the three strike rule, their account will be disabled when appropriate.
                    </li>
                </ol>
                <strong>Disclaimer of Warranties</strong>
                <p>
                    THE SERVICE, INCLUDING, WITHOUT LIMITATION, LGCY CONTENT, IS PROVIDED ON AN "AS IS", "AS AVAILABLE" AND "WITH ALL FAULTS" BASIS. TO THE FULLEST EXTENT PERMISSIBLE BY LAW, NEITHER LGCY NOR ANY OF THEIR EMPLOYEES, MANAGERS, OFFICERS OR AGENTS (COLLECTIVELY, THE "LGCY PARTIES") MAKE ANY REPRESENTATIONS OR WARRANTIES OR ENDORSEMENTS OF ANY KIND WHATSOEVER, EXPRESS OR IMPLIED, AS TO: (A) THE SERVICE; (B) THE LGCY CONTENT; (C) USER CONTENT; OR (D) SECURITY ASSOCIATED WITH THE TRANSMISSION OF INFORMATION TO LGCY OR VIA THE SERVICE. IN ADDITION, THE LGCY PARTIES HEREBY DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, TITLE, CUSTOM, TRADE, QUIET ENJOYMENT, SYSTEM INTEGRATION AND FREEDOM FROM COMPUTER VIRUS. 
                    <br /><br />
                    THE LGCY PARTIES DO NOT REPRESENT OR WARRANT THAT THE SERVICE WILL BE ERROR-FREE OR UNINTERRUPTED; THAT DEFECTS WILL BE CORRECTED; OR THAT THE SERVICE OR THE SERVER THAT MAKES THE SERVICE AVAILABLE IS FREE FROM ANY HARMFUL COMPONENTS, INCLUDING, WITHOUT LIMITATION, VIRUSES. THE LGCY PARTIES DO NOT MAKE ANY REPRESENTATIONS OR WARRANTIES THAT THE INFORMATION (INCLUDING ANY INSTRUCTIONS) ON THE SERVICE IS ACCURATE, COMPLETE, OR USEFUL. YOU ACKNOWLEDGE THAT YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK. THE LGCY PARTIES DO NOT WARRANT THAT YOUR USE OF THE SERVICE IS LAWFUL IN ANY PARTICULAR JURISDICTION, AND LGCY PARTIES SPECIFICALLY DISCLAIM SUCH WARRANTIES. SOME JURISDICTIONS LIMIT OR DO NOT ALLOW THE DISCLAIMER OF IMPLIED OR OTHER WARRANTIES SO THE ABOVE DISCLAIMER MAY NOT APPLY TO YOU TO THE EXTENT SUCH JURISDICTION'S LAW IS APPLICABLE TO YOU AND THESE TERMS OF USE. 
                    <br /><br />
                    BY ACCESSING OR USING THE SERVICE YOU REPRESENT AND WARRANT THAT YOUR ACTIVITIES ARE LAWFUL IN EVERY JURISDICTION WHERE YOU ACCESS OR USE THE SERVICE. 
                    <br /><br />
                    THE LGCY PARTIES DO NOT ENDORSE CONTENT AND SPECIFICALLY DISCLAIM ANY RESPONSIBILITY OR LIABILITY TO ANY PERSON OR ENTITY FOR ANY LOSS, DAMAGE (WHETHER ACTUAL, CONSEQUENTIAL, PUNITIVE OR OTHERWISE), INJURY, CLAIM, LIABILITY OR OTHER CAUSE OF ANY KIND OR CHARACTER BASED UPON OR RESULTING FROM ANY CONTENT.
                    <br />
                </p>
                <strong>Limitation of Liability; Waiver</strong>
                <p>
                    UNDER NO CIRCUMSTANCES WILL LGCY PARTIES BE LIABLE TO YOU FOR ANY LOSS OR DAMAGES OF ANY KIND (INCLUDING, WITHOUT LIMITATION, FOR ANY DIRECT, INDIRECT, ECONOMIC, EXEMPLARY, SPECIAL, PUNITIVE, INCIDENTAL OR CONSEQUENTIAL LOSSES OR DAMAGES) THAT ARE DIRECTLY OR INDIRECTLY RELATED TO: (A) THE SERVICE; (B) THE LGCY CONTENT; (C) USER CONTENT; (D) YOUR USE OF, INABILITY TO USE, OR THE PERFORMANCE OF THE SERVICE; (E) ANY ACTION TAKEN IN CONNECTION WITH AN INVESTIGATION BY THE LGCY PARTIES OR LAW ENFORCEMENT AUTHORITIES REGARDING YOUR OR ANY OTHER PARTY'S USE OF THE SERVICE; (F) ANY ACTION TAKEN IN CONNECTION WITH COPYRIGHT OR OTHER INTELLECTUAL PROPERTY OWNERS; (G) ANY ERRORS OR OMISSIONS IN THE SERVICE'S OPERATION; OR (H) ANY DAMAGE TO ANY USER'S COMPUTER, MOBILE DEVICE, OR OTHER EQUIPMENT OR TECHNOLOGY INCLUDING, WITHOUT LIMITATION, DAMAGE FROM ANY SECURITY BREACH OR FROM ANY VIRUS, BUGS, TAMPERING, FRAUD, ERROR, OMISSION, INTERRUPTION, DEFECT, DELAY IN OPERATION OR TRANSMISSION, COMPUTER LINE OR NETWORK FAILURE OR ANY OTHER TECHNICAL OR OTHER MALFUNCTION, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOST PROFITS, LOSS OF GOODWILL, LOSS OF DATA, WORK STOPPAGE, ACCURACY OF RESULTS, OR COMPUTER FAILURE OR MALFUNCTION, EVEN IF FORESEEABLE OR EVEN IF THE LGCY PARTIES HAVE BEEN ADVISED OF OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF SUCH DAMAGES, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, STRICT LIABILITY OR TORT (INCLUDING, WITHOUT LIMITATION, WHETHER CAUSED IN WHOLE OR IN PART BY NEGLIGENCE, ACTS OF GOD, TELECOMMUNICATIONS FAILURE, OR THEFT OR DESTRUCTION OF THE SERVICE). IN NO EVENT WILL THE LGCY PARTIES BE LIABLE TO YOU OR ANYONE ELSE FOR LOSS, DAMAGE OR INJURY, INCLUDING, WITHOUT LIMITATION, DEATH OR PERSONAL INJURY. IN NO EVENT WILL THE LGCY PARTIES TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES OR CAUSES OR ACTION EXCEED ONE HUNDRED CANADIAN DOLLARS ($100.00). 
                    <br /><br />
                    YOU AGREE THAT IN THE EVENT YOU INCUR ANY DAMAGES, LOSSES OR INJURIES THAT ARISE OUT OF LGCY'S ACTS OR OMISSIONS, THE DAMAGES, IF ANY, CAUSED TO YOU ARE NOT IRREPARABLE OR SUFFICIENT TO ENTITLE YOU TO AN INJUNCTION PREVENTING ANY EXPLOITATION OF ANY WEB SITE, SERVICE, PROPERTY, PRODUCT OR OTHER CONTENT OWNED OR CONTROLLED BY THE LGCY PARTIES, AND YOU WILL HAVE NO RIGHTS TO ENJOIN OR RESTRAIN THE DEVELOPMENT, PRODUCTION, DISTRIBUTION, ADVERTISING, EXHIBITION OR EXPLOITATION OF ANY WEBSITE, PROPERTY, PRODUCT, SERVICE, OR OTHER CONTENT OWNED OR CONTROLLED BY THE LGCY PARTIES.
                    <br /><br />
                    BY ACCESSING THE SERVICE, YOU UNDERSTAND THAT YOU MAY BE WAIVING RIGHTS WITH RESPECT TO CLAIMS THAT ARE AT THIS TIME UNKNOWN OR UNSUSPECTED, AND IN ACCORDANCE WITH SUCH WAIVER, YOU ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTAND, AND HEREBY EXPRESSLY WAIVE, "A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM MUST HAVE MATERIALLY AFFECTED HIS SETTLEMENT WITH THE DEBTOR."
                    <br /><br />
                    LGCY IS NOT RESPONSIBLE FOR THE ACTIONS, CONTENT, INFORMATION, OR DATA OF THIRD PARTIES, AND YOU RELEASE US, OUR DIRECTORS, OFFICERS, EMPLOYEES, AND AGENTS FROM ANY CLAIMS AND DAMAGES, KNOWN AND UNKNOWN, ARISING OUT OF OR IN ANY WAY CONNECTED WITH ANY CLAIM YOU HAVE AGAINST ANY SUCH THIRD PARTIES.
                    <br />
                </p>
                <strong>Indemnification</strong>
                <p>
                    You (and also any third party for whom you operate an account or activity on the Service) agree to defend (at Lgcy's request), indemnify and hold the Lgcy Parties harmless from and against any claims, liabilities, damages, losses, and expenses, including without limitation, reasonable attorney's fees and costs, arising out of or in any way connected with any of the following (including as a result of your direct activities on the Service or those conducted on your behalf): (i) your Content or your access to or use of the Service; (ii) your breach or alleged breach of these Terms of Use; (iii) your violation of any third-party right, including without limitation, any intellectual property right, publicity, confidentiality, property or privacy right; (iv) your violation of any laws, rules, regulations, codes, statutes, ordinances or orders of any governmental and quasi-governmental authorities, including, without limitation, all regulatory, administrative and legislative authorities; or (v) any misrepresentation made by you. You will cooperate as fully required by Lgcy in the defense of any claim. Lgcy reserves the right to assume the exclusive defense and control of any matter subject to indemnification by you, and you will not in any event settle any claim without the prior written consent of Lgcy.
                    <br />
                </p>
                <strong>Arbitration</strong>
                <p>
                    Except if you opt-out or for disputes relating to: (1) your or Lgcy's intellectual property (such as trademarks, trade dress, domain names, trade secrets, copyrights and patents); (2) violations of the API Terms, you agree that all disputes between you and Lgcy (whether or not such dispute involves a third party) with regard to your relationship with Lgcy, including without limitation disputes related to these Terms of Use, your use of the Service, and/or rights of privacy and/or publicity, will be resolved by binding, individual arbitration of consumer-related disputes and you and Lgcy hereby expressly waive trial by jury. As an alternative, you may bring your claim in your local "small claims" court, if permitted by that small claims court's rules. You may bring claims only on your own behalf. Neither you nor Lgcy will participate in a class action or class-wide arbitration for any claims covered by this agreement. You also agree not to participate in claims brought in a private attorney general or representative capacity, or consolidated claims involving another person's account, if Lgcy is a party to the proceeding. Judgment on the award rendered by the arbitrator may be entered in any court having competent jurisdiction. Any provision of applicable law notwithstanding, the arbitrator will not have authority to award damages, remedies or awards that conflict with these Terms of Use. 
                    <br /><br />
                    You may opt out of this agreement to arbitrate. If you do so, neither you nor Lgcy can require the other to participate in an arbitration proceeding. To opt out, you must notify Lgcy in writing within 30 days of the date that you first became subject to this arbitration provision.
                    <br /><br />
                    If the prohibition against class actions and other claims brought on behalf of third parties contained above is found to be unenforceable, then all of the preceding language in this Arbitration section will be null and void. This arbitration agreement will survive the termination of your relationship with Lgcy.
                    <br />
                </p>
                <strong>Time Limitation on Claims</strong>
                <p>
                    You agree that any claim you may have arising out of or related to your relationship with Lgcy must be filed within one year after such claim arose; otherwise, your claim is permanently barred.
                    <br />
                </p>
                <strong>Governing Law & Venue</strong>
                <p>
                    These Terms of Use are governed by and construed in accordance with the laws of Canada, without giving effect to any principles of conflicts of law AND WILL SPECIFICALLY NOT BE GOVERNED BY THE UNITED NATIONS CONVENTIONS ON CONTRACTS FOR THE INTERNATIONAL SALE OF GOODS, IF OTHERWISE APPLICABLE. For any action at law or in equity relating to the arbitration provision of these Terms of Use, the Excluded Disputes or if you opt out of the agreement to arbitrate, you agree to resolve any dispute you have with Lgcy exclusively in a provincial or federal court located in, Ottawa, Ontario, Canada, and to submit to the personal jurisdiction of the courts located in Ottawa, Canada for the purpose of litigating all such disputes.
                    <br /><br />
                    If any provision of these Terms of Use is held to be unlawful, void, or for any reason unenforceable during arbitration or by a court of competent jurisdiction, then that provision will be deemed severable from these Terms of Use and will not affect the validity and enforceability of any remaining provisions. Lgcy's failure to insist upon or enforce strict performance of any provision of these Terms will not be construed as a waiver of any provision or right. No waiver of any of these Terms will be deemed a further or continuing waiver of such term or condition or any other term or condition. Lgcy reserves the right to change this dispute resolution provision, but any such changes will not apply to disputes arising before the effective date of the amendment. This dispute resolution provision will survive the termination of any or all of your transactions with Lgcy.
                    <br />
                </p>
                <strong>Entire Agreement</strong>
                <p>
                    If you are using the Service on behalf of a legal entity, you represent that you are authorized to enter into an agreement on behalf of that legal entity. These Terms of Use constitute the entire agreement between you and Lgcy and governs your use of the Service, superseding any prior agreements between you and Lgcy. You will not assign the Terms of Use or assign any rights or delegate any obligations hereunder, in whole or in part, whether voluntarily or by operation of law, without the prior written consent of Lgcy. Any purported assignment or delegation by you without the appropriate prior written consent of Lgcy will be null and void. Lgcy may assign these Terms of Use or any rights hereunder without your consent. If any provision of these Terms of Use is found by a court of competent jurisdiction to be invalid or otherwise unenforceable, the parties nevertheless agree that such portion will be deemed severable from these Terms of Use and will not affect the validity and enforceability of the remaining provisions, and the remaining provisions of the Terms of Use remain in full force and effect. Neither the course of conduct between the parties nor trade practice will act to modify the Terms of Use. These Terms of Use do not confer any third-party beneficiary rights.
                    <br />
                </p>
                <strong>Territorial Restrictions</strong>
                <p>
                    The information provided within the Service is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject Lgcy to any registration requirement within such jurisdiction or country. We reserve the right to limit the availability of the Service or any portion of the Service, to any person, geographic area, or jurisdiction, at any time and in our sole discretion, and to limit the quantities of any content, program, product, service or other feature that Lgcy provides.
                    <br /><br />
                    Software related to or made available by the Service may be subject to Canada export controls. Thus, no software from the Service may be downloaded, exported or re-exported: (a) into (or to a national or resident of) any country to which Canada has embargoed goods; or (b) to anyone on the Canada Treasury Department's list of Specially Designated Nationals or the Canadian Commerce Department's Table of Deny Orders. By downloading any software related to the Service, you represent and warrant that you are not located in, under the control of, or a national or resident of, any such country or on any such list.
                    <br /><br />
                    The effective date of these Terms of Use is November 3, 2017. These Terms of Use were written in English (US). To the extent any translated version of these Terms of Use conflicts with the English version, the English version controls.
                    <br />
                </p>
            </Grid>
        );
    };

    const PrivacyPolicy = () => {
        return (
            <Grid
                container
                className={classes.legal}
                //style={{ block: "flex", justify: "center" }}
            >
                <h1 style={{ fontWeight: "bold", width: "100%" }}>Privacy Policy</h1>         
                <p>
                    <b>Effective date: January 1, 2021.</b>
                </p>
                <p>
                    Welcome to
                    Lgcy ("Lgcy," "we," "us" or "our"). Lgcy provides a fast and creative
                    way for you to share your life's story through our content-sharing
                    platform. 
                </p>
                <ul>
                    <li>
                        Our Privacy Policy explains how we collect, use, share and protect information in relation to our  website, mobile services and any software provided on or in connection with Lgcy services (collectively, the "<b>Service</b>"), and your choices about the collection and use of your information.
                    </li>
                    <li>
                        By using our Service you understand and agree that we are providing a platform for you to post content ("<b>User Content</b>"), to the Service and to share User Content publicly or privately. This means that other Users may search for, see, use, or share any of your User Content that you make publicly available through the Service or privately if you choose to share it with them, consistent with the terms and conditions of this Privacy Policy and our Terms of Use
                    </li>
                    <li>
                        Our Policy applies to all visitors, users, and others who access the Service ("<b>Users</b>").
                    </li>
                </ul>
                <strong style={{ width: "100%" }}><br />Table of Content</strong>
                <ol>
                    <li>
                        Information and Data We Collect
                    </li>
                    <li>
                        How Lgcy Uses Your Information
                    </li>
                    <li>
                        Sharing of Your Information
                    </li>
                    <li>
                        How Lgcy Stores Your Information
                    </li>
                    <li>
                        Your Choices About Your Information
                    </li>
                    <li>
                        Children's Privacy
                    </li>
                    <li>
                        Other Websites and Services
                    </li>
                    <li>
                        How to Contact Us About a Deceased User
                    </li>
                    <li>
                        How to Contact Us
                    </li>
                    <li>
                        Changes to Our Privacy Policy
                    </li>
                </ol>
                <p style={{ width: "100%" }}>
                    <b>1. INFORMATION AND DATA WE COLLECT</b><br />
                    We collect the following types of information.<br />
                </p>
                <strong style={{ width: "100%" }}>Information you provide us directly:</strong>
                <ul>
                    <li>
                        Your username, password, email address, age, gender, country and interests when you register for a Lgcy account.
                    </li>
                    <li>
                        Profile information that you provide for your user profile. This information allows us to help you or others be "found" on Lgcy.
                    </li>
                    <li>
                        User Content (photos, videos, text, comments, links, audio, gifs and other materials) that you post to the Service.
                    </li>
                    <li>
                        Communications between you and Lgcy. We may send you Service-related emails (account verification, changes/updates to features of the Service, technical and security notices). You may not opt out of Service-related emails.
                    </li>
                </ul>
                <strong style={{ width: "100%" }}>Analytics information:</strong>
                <ul>
                    <li>
                        We use analytics tools to help us measure traffic and usage trends for the Service. These tools collect information sent by your device or our Service, including the web pages you visit, add-ons, and other information that assists us in improving the Service. We collect and use this analytics information with analytics information from other Users so that it cannot reasonably be used to identify any particular individual User.
                    </li>
                </ul>
                <strong>Cookies and similar technologies:</strong>
                <ul>
                    <li>
                        When you visit Lgcy, we may use cookies and similar technologies like pixels, web beacons, and local storage to collect information about how you use Lgcy and provide features to you.
                    </li>
                </ul>
                <strong style={{ width: "100%" }}>Log file information:</strong>
                <ul>
                    <li>
                        Log file information is automatically reported by your browser each time you make a request to access a web page or app. It can also be provided when the content of the web page or app is downloaded to your browser or device.
                    </li>
                    <li>
                        When you use our Service, our servers automatically record certain log file information, including your web request, Internet Protocol ("IP") address, browser type, referring / exit pages and URLs, number of clicks and how you interact with links on the Service, domain names, landing pages, pages viewed, and other such information. 
                    </li>
                    <li>
                        We may also collect similar information from emails sent to our Users which then help us track which emails are opened and which links are clicked by recipients. 
                    </li>
                </ul>
                <strong style={{ width: "100%" }}>Device identifiers:</strong>
                <ul>
                    <li>
                        When you use a mobile device to access our Service, we may access, collect, monitor, store on your device, and/or remotely store one or more "device identifiers." Device identifiers are small data files stored on or associated with your mobile device, which uniquely identify your mobile device. 
                    </li>
                    <li>
                        A device identifier may deliver information to us or to a third party partner about how you browse and use the Service and may help us or others provide reports or personalized content and ads. 
                    </li>
                </ul>
                <strong style={{ width: "100%" }}><br />2. HOW LGCY USES YOUR INFORMATION</strong>
                <p>
                    In addition to some of the specific
                    uses of information we describe in this Privacy Policy, we may use
                    information that we receive to: 
                </p>
                <ul>
                    <li>
                        Help you efficiently access your information after you sign in
                    </li>
                    <li>
                        Remember information so you will not have to re-enter it during your visit or the next time you visit the Service;
                    </li>
                    <li>
                        Provide personalized content and information to you
                    </li>
                    <li>
                        Provide, improve, test, and monitor the effectiveness of our Service
                    </li>
                    <li>
                        Develop and test new features
                    </li>
                    <li>
                        Monitor metrics such as total number of visitors, traffic, and demographic patterns
                    </li>
                    <li>
                        Diagnose or fix technology problems
                    </li>
                    <li>
                        Automatically update the Lgcy application on your device Lgcy or other Users may run contests, special offers or other events or activities ("Events") on the Service.
                    </li>
                </ul>
                <strong style={{ width: "100%" }}><br />3. SHARING OF YOUR INFORMATION<br />
                Parties with whom we may share your information:
                </strong>
                <ul>
                    <li>
                        We may share your information as well as information from tools like cookies, log files, and device identifiers and location data (such as usage data, referring/exit pages and URLs, platform types, number of clicks, etc.), with organizations that help us provide the Service to you ("Service Providers"). Our Service Providers will be given access to your information as is reasonably necessary to provide the Service under reasonable confidentiality terms.
                    </li>
                    <li>
                        We may also share certain information such as cookie data with third-party advertising partners. This information would allow third-party ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you.
                    </li>
                    <li>
                        We may remove parts of data that can identify you and share anonymized data with other parties. We may also combine your information with other information in a way that it is no longer associated with you and share that aggregated information.
                    </li>
                </ul>
                <strong style={{ width: "100%" }}>
                    Parties with whom you may choose to share your User Content:
                </strong>
                <ul>
                    <li>
                        Any information or content that you voluntarily disclose for posting to the Service, such as User Content, becomes available to the public, as controlled by any applicable privacy settings that you set for your timeline(s). To change your timeline(s) privacy settings on the Service, please change your timeline setting. Once you have shared User Content or made it public, that User Content may be re-shared by others.
                    </li>
                    <li>
                        Subject to your profile and privacy settings, any User Content that you make public is searchable by other Users and subject to use under our Lgcy API. The use of the Lgcy API is subject to the API Terms of Use which incorporates the terms of this Privacy Policy.
                    </li>
                    <li>
                        If you remove information that you posted to the Service, copies may remain viewable in cached and archived pages of the Service, or if other Users or third parties using the Lgcy API have copied or saved that information.
                    </li>
                </ul>
                <p>
                    <b>Instances where we may be required to share your information:</b><br />
                    Lgcy will disclose your information where required to do so by law or by judicial process or if we reasonably believe that such action is necessary to:
                </p>
                <ul>
                    <li>
                        Comply with the law and the reasonable requests of law enforcement
                    </li>
                    <li>
                        Enforce our Terms of Use
                    </li>
                    <li>
                        Protect the security or integrity of our Service
                    </li>
                    <li>
                        Exercise or protect the rights, property, or personal safety of Lgcy, our Users or others
                    </li>
                </ul>
                <strong style={{ width: "100%" }}><br />4. HOW LGCY STORES YOUR INFORMATION<br />
                Storage and Processing:
                </strong>
                <ul>
                    <li>
                        Your information collected through the Service may be stored and processed in Canada, the United States or any other country in which Lgcy or Service Providers maintain facilities.
                    </li>
                    <li>
                        Lgcy may transfer information that we collect about you, including personal information across borders and from your country or jurisdiction to other countries or jurisdictions around the world. If you are located in the European Union or other regions with laws governing data collection and use that may differ from U.S. or Canadian law, please note that we may transfer information, including personal information, to a country and jurisdiction that does not have the same data protection laws as your jurisdiction.
                    </li>
                    <li>
                        By registering for and using the Service you consent to the transfer of information to Canada or to any other country in which Lgcy, a company in the same group of companies as Lgcy or Service Providers maintain facilities and the use and disclosure of information about you as described in this Privacy Policy.
                    </li>
                    <li>
                        We use commercial safeguards to help keep the information collected through the Service secure and take reasonable steps (such as requesting a unique password) to verify your identity before granting you access to your account. However, Lgcy cannot ensure the security of any information you transmit to Lgcy or guarantee that information on the Service may not be accessed, disclosed, altered, or destroyed.
                    </li>
                </ul>
                <strong style={{ width: "100%" }}><br />5. YOUR CHOICES ABOUT YOUR INFORMATION<br />
                Your account information and profile/privacy settings:
                </strong>
                <ul>
                    <li>
                        Update your account at any time by logging in and changing your profile settings.
                    </li>
                    <li>
                        Unsubscribe from email communications from us by clicking on the "unsubscribe link" provided in such communications. You may not opt out of Service-related communications
                    </li>
                </ul>
                <strong style={{ width: "100%" }}>
                    How long we keep your User Content
                </strong>
                <ul>
                    <li>
                        Following termination or deactivation of your account, Lgcy may retain information (including your profile information) and User Content for a commercially reasonable time for backup, archival, and/or audit purposes.
                    </li>
                </ul>
                <strong style={{ width: "100%" }}>
                    6. CHILDREN'S PRIVACY
                </strong>
                <p>
                    Lgcy does not knowingly collect or solicit any information from anyone under the age of 13 or knowingly allow such persons to register for the Service. The Service and its content are not directed at children under the age of 13. In the event that we learn that we have collected personal information from a child under age 13 without parental consent, we will delete that information as quickly as possible. If you believe that we might have any information from or about a child under 13, please contact us.
                </p>
                <strong style={{ width: "100%" }}>
                    7. OTHER WEB SITES AND SERVICES
                </strong>
                <p>
                    We are not responsible for the practices employed by any websites or services linked to or from our Service, including the information or content contained within them. Please remember that when you use a link to go from our Service to another website or service, our Privacy Policy does not apply to those third-party websites or services. Your browsing and interaction on any third-party website or service, including those that have a link on our website, are subject to that third party's own rules and policies. In addition, you agree that we are not responsible and do not have control over any third-parties that you authorize to access your User Content. If you are using a third-party website or service and you allow them to access your User Content you do so at your own risk.
                </p>
                <strong style={{ width: "100%" }}>
                    8. HOW TO CONTACT US ABOUT A DECEASED USER
                </strong>
                <p>
                    In the event of the death of an Lgcy User, please contact us. We will usually conduct our communication via email; should we require any other information, we will contact you at the email address you have provided in your request. If the deceased user has implemented in their settings that they would like their profile and or timeline(s) to exist forever, we will respect the wishes of the user and keep their profile live on the website
                </p>
                <strong style={{ width: "100%" }}>
                    9. HOW TO CONTACT US
                </strong>
                <p>
                    If you have any questions about this Privacy Policy or the Service, please find the appropriate support channel in the Lgcy Help Center at which to contact us.
                </p>
                <strong style={{ width: "100%" }}>
                    10. CHANGES TO OUR PRIVACY POLICY
                </strong>
                <p>
                    Lgcy may modify or update this Privacy Policy, please review it periodically. We may provide you additional forms of notice of modifications or updates as appropriate under the circumstances. Your continued use of Lgcy or the Service after any modification to this Privacy Policy will constitute your acceptance of such modification.
                </p>
                <h3 style={{ width: "100%" }}>Privacy Policy - Summary</h3>
                <p style={{ width: "100%" }}>We receive information that:</p>
                <ul>
                    <li>
                        You provide when you set up an account
                    </li>
                    <li>
                        You share on Lgcy
                    </li>
                    <li>
                        You allow us to collect when you use Lgcy features
                    </li>
                    <li>
                        You allow social media services to share with us
                    </li>
                    <li>
                        We get from seeing how you use Lgcy
                    </li>
                    <li>
                        We get from communicating with you
                    </li>
                    <li>
                        We get from cookies and other technology
                    </li>
                </ul>
                <p style={{ width: "100%" }}>We use this information to:</p>
                <ul>
                    <li>
                        Provide Lgcy features and services to you
                    </li>
                    <li>
                        Improve the Lgcy website, app and services
                    </li>
                    <li>
                        Analyze how you use Lgcy
                    </li>
                    <li>
                        Provide you with information
                    </li>
                    <li>
                        Diagnose technical problems and maintain security
                    </li>
                    <li>
                        Provide you with relative marketing
                    </li>
                </ul>
                <p style={{ width: "100%" }}>We share this information with:</p>
                <ul>
                    <li>
                        Other Lgcy users where you allow information to be public or privately with specific users who you choose
                    </li>
                    <li>
                        Social media services you tell us to share information with
                    </li>
                    <li>
                        Business partners
                    </li>
                    <li>
                        Outside parties to comply with the law and legal obligations
                    </li>
                </ul>
                <p style={{ width: "100%" }}>We store information:</p>
                <ul>
                    <li>
                        Primarily in Canada and the United States, but may also use other locations around the world
                    </li>
                </ul>           
            </Grid>
        );
    };

    const CookiePolicy = () => {
        return (
            <Grid
                container
                direction="row"
                className={classes.legal}
            >
                <h1 style={{ fontWeight: "bold" }}>Cookie Policy</h1>
                <p> Lgcy uses cookies and other similar technologies, such as pixels or
                local storage, to help provide its users with a better experience on
                the platform. Here are some of the ways that the Lgcy services, APIs,
                email notifications, applications, buttons, widgets, and ads. Lgcy
                uses these technologies: to log users into Lgcy, save users
                preferences, personalize the content they see, protect against spam
                    and abuse, and show users more relevant ads. <br /><br />
                </p>
                    <strong>The reason Lgcy uses these technologies</strong>
                <p>
                    Lgcy uses these technologies to deliver, measure, and improve our services. These uses generally fall into one of the following categories: 
                </p>
                <ul>
                    <li> Authentication and security:
                        <ul>
                            <li> To log users into Lgcy </li>
                            <li> To protect users security </li>
                            <li> To let users to view content with limited distribution </li>
                            <li> To help us detect and fight spam, abuse, and other activities that violate Lgcy's Term of Use, Community Guideline or Privacy Policy </li>
                        </ul>
                    </li>
                    <li> Preferences:
                        <ul>
                            <li>To remember information about users browser and their preferences</li>
                        </ul>
                    </li>
                    <li> Analytics and research:
                        <ul>
                            <li>To help us improve and understand how users use our services, including Lgcy buttons, widgets, and Lgcy Ads</li>
                        </ul>
                    </li>
                    <li> Personalized content:
                        <ul>
                            <li>To customize our services with more relevant content, like tailored trends, stories, ads, and suggestions for people to follow</li>
                        </ul>
                    </li>
                    <li> Advertising:
                        <ul>
                            <li>To help us deliver ads, measure their performance, and make them more relevant to users based on criteria like their activity on Lgcy and visits to our ad partners' websites</li>
                        </ul>
                    </li>
                </ul>
                <p> Lgcy also works with third-party advertising
                partners to market Lgcy's services and serve ads on behalf of Lgcy
                advertisers, including through the delivery of interest-based ads.<br />
                </p>
                <ul>
                <li> Personalization across devices:
                    <ul>
                        <li>By better understanding how devices are related, we can use information from one device to help personalize the Lgcy experience on another device.</li>
                    </ul>
                </li>
                </ul>
                <b><br />Where are these technologies used?</b>
                <p> Lgcy and third parties use these technologies on
                    Lgcy's websites, applications, and services and on other websites,
                    applications, and services that have integrated Lgcy's services,
                    including third-party properties that incorporate Lgcy's advertising
                    technology. This includes our ad partners' websites and sites that use
                    Lgcy embeds, including embedded timelines.
                </p>
            </Grid>
        );
    };
    const Contact = () => {
        const [submitting, setSubmitting] = useState(false);
        const [email, setEmail] = useState("");
        const [name, setName] = useState("");
        const [message, setMessage] = useState("");

        {/*function handleSubmit(e) {
            e.preventDefault();

            //This is used when the form is not submitted via Getform endpoint
            setSubmitting(true);

            setTimeout(() => {
                setSubmitting(false);
            }, 3000)

            // clearing the values
            setName("");
            setEmail("");
            setMessage("");
        }*/}

        return (
            <Grid
                container
                direction="column"
                className={classes.legal}
                style={{ alignItems: "center" }}
            >
                <h1 style={{ fontWeight: "bold" }} >Contact</h1>
                <p style={{ marginBottom: "0.1%" }}> Please fill in the form below </p><br />
                <Grid
                    container
                    direction="column"
                    style={{
                    width: "100%",
                    //height: 30,
                    block: "inline-block",
                    justify: "center",
                    alignItems: "center",
                    //border: "1px solid black",
                    }}>
                    <div style={{
                        width: "60%",
                        block: "inline-block",
                        justify: "center",
                        alignItems: "center",
                        textAlign: "center",
                        //border: "1px solid black",
                    }}>
                        {submitting &&
                            <div style={{ color: "green", alignItems: "center", textAlign: "center", }}>
                                You have submitted the form.</div>
                        }
                    <form
                            //onSubmit={handleSubmit}
                            acceptCharset="UTF-8"
                            action="https://getform.io/f/203fefd1-4034-47ea-9600-02f793c97891"
                            method="POST"
                            encType="multipart/form-data"
                            name="ContactForm"
                    >
                        
                        <TextField
                            id="standard-basic"
                            name="email"
                            style={{ width: "100%" }}
                            type="email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            label="Email" />
                        <TextField
                            id="standard-basic"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            style={{ width: "100%", marginBottom: "1.3%", marginTop: "1.3%", }}
                            required 
                            label="Name" />
                        <TextField
                            id="outlined-basic"
                            multiline
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            name="message"
                            style={{ width: "100%", marginBottom: "1.6%" }}
                            required 
                            label="Message" />
                        <input type="hidden" name="utf8" value="✓"/>
                        <button
                            type="submit"
                            justify="center"
                            style={{ width: "15%", borderRadius: 100, padding: "1%", background: "white", fontSize: "1.3vw", marginTop: "3%"}}
                        >Submit</button>
                    </form>
                    </div>
                    {/*<input type="file" name="file" />*/}
                </Grid>
            </Grid>
        );
    };

    return (
        <Grid>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{ height: 100, borderBottom: "1px solid black" }}
            >
                <a href="/">
                <button
                    style={{
                        fontSize: "5vw",
                        // color: "white",
                        textAlign: "center",
                        fontFamily: "Radley",
                        width: "100%",
                        //fontWeight: "bold",
                        margin: 0,
                        //marginLeft: 50,
                        marginBottom: 15,
                        background: "transparent",
                        border: "transparent",
                    }}
                >
                    lgcy
                </button></a>
            </Grid>
            <Grid container direction="row">
                <Grid item md={2} xs={3}>
                    <Grid
                        container
                        direction="column"
                        style={{
                            //height: "calc(100vh - 130px)"
                        }}
                    >
                        <div style={{ height: 10 }}></div>
                        {[
                            "About",
                            "Community Guidelines",
                            "Terms of Use",
                            "Privacy Policy",
                            "Cookie Policy",
                            "Contact",
                        ].map((item) => {
                            return (
                                <p
                                    style={{
                                        margin: 0,
                                        fontFamily: "Radley",
                                        fontSize: "1.6vw",
                                        marginLeft: "18%",
                                        //marginRight: 30,
                                        marginTop: 18,
                                        cursor: "pointer",
                                    }}
                                    onClick={() => {
                                        setActiveTab(item);
                                    }}
                                >
                                    {item}
                                </p>
                            );
                        })}
                    </Grid>
                </Grid>

                <Grid item md={10} xs={9}>
                    {activeTab === "About" ? (
                        <About></About>
                    ) : activeTab === "Community Guidelines" ? (
                        <CommunityGuidelines></CommunityGuidelines>
                    ) : activeTab === "Terms of Use" ? (
                        <TermsOfUse></TermsOfUse>
                    ) : activeTab === "Privacy Policy" ? (
                        <PrivacyPolicy></PrivacyPolicy>
                    ) : activeTab === "Cookie Policy" ? (
                        <CookiePolicy></CookiePolicy>
                    ) : activeTab === "Contact" ? (
                        <Contact></Contact>
                    ) : (
                                            <div></div>
                                        )}
                </Grid>
            </Grid>
        </Grid>
    );
}
