'use client'

import { useState } from 'react';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

export const Term = () => {
  const [open, setOpen] = useState<boolean>(!Boolean(Number(window.localStorage.getItem("ryd47-first-come"))))
  const [isChecked, setIsChecked] = useState<boolean>(false) as any

  const onClickContinue = () => {
    window.localStorage.setItem("ryd47-first-come", "1")
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      
      <DialogContent className='max-w-3xl'>
        <DialogHeader>
          <DialogTitle className='text-3xl'>Terms of use</DialogTitle>
        </DialogHeader>
        <div className="ant-modal-content">
          <div className="ant-modal-body">
            <div className="modal_info">
              <div className="rounded-lg bg-neutral-900 pl-4 pr-2 py-3">
                <div className="h-[400px] overflow-y-scroll overflow-x-visible text-white custom-scrollbar font-light space-y-4">
                  <p>
                    The following terms of use (the “Terms”) constitute an
                    agreement between you or the company or other legal entity
                    you represent (“you” or “your”) and LaunchZone
                    (“LaunchZone,” “we,” or “us”), a company incorporated in
                    HongKong SAR and, apply to your use of LaunchZone’s products
                    and/or services, or https://lz.finance.
                  </p>
                  <p>
                    You agree that you have read, understood, and accepted these
                    Terms as well as our policies disclosed and updated from
                    time to time, and you acknowledge and agree that you will be
                    bound by such terms and policies.
                  </p>
                  <h2 className='text-2xl font-medium'>1. ELIGIBILITY</h2>
                  <p>
                    If you are an individual, you must be of legal age in the
                    jurisdiction in which you reside and you have the legal
                    capacity to enter into these Terms.
                  </p>
                  <p>
                    If you are on behalf of a legal entity, you represent and
                    warrant that (i) such legal entity is duly organized and
                    validly existing under the applicable laws of the
                    jurisdiction of its organization; (ii) you are duly
                    authorized by such legal entity to act on its behalf.
                  </p>
                  <p>
                    By accessing or using LaunchZone’s products and/or services,
                    you further represent and warrant that you are not a
                    Restricted Person nor are you a resident of a Restricted
                    Territory (each as defined in Section 2) and you will not be
                    using LaunchZone’s products and/or services for any illegal
                    activity including, but not limited to, those Restricted
                    Activities listed under Section 3. Notwithstanding the
                    foregoing, we may determine not to make the services, in
                    whole or in part, available in every market, either in its
                    sole discretion or due to legal or regulatory requirements,
                    depending on your location. Additionally, use of a virtual
                    private network (e.g., a VPN) or other means by Restricted
                    Persons or persons from Restricted Territories to access or
                    use our service is prohibited.
                  </p>
                  <h2 className='text-2xl font-medium'>2. LEGAL COMPLIANCE</h2>
                  <p>
                    1) You agree that you are solely and entirely responsible
                    for compliance with all laws and regulations that may apply
                    to you. You further agree that we have no obligation to
                    inform you of any potential liabilities or violations of law
                    or regulation that may arise in connection with your access
                    and use of our service and that we are not liable in any
                    respect for any failure by you to comply with any applicable
                    laws or regulations.
                  </p>
                  <p> You may not use our services if </p>
                  <p>
                    (i) you are incorporated or otherwise established in, or a
                    citizen or resident a prohibited jurisdiction as follows
                    (“Restricted Territories”), including but not limited to:
                  </p>
                  <p>
                    - Afghanistan Antigua
                    <br />- Antigua and Barbuda
                    <br />- Albania Bahamas
                    <br />- Bangladesh
                    <br />- Bosnia and Herzegovina
                    <br />- Belarus Burma
                    <br />- Cambodia
                    <br />- Cayman
                    <br />- China
                    <br />- Cote D'Ivoire (Ivory Coast)
                    <br />- Cuba
                    <br />- Crimea and Sevastopol
                    <br />- Democratic Republic of Congo
                    <br />- Egypt
                    <br />- Guam
                    <br />- Iran
                    <br />- Iraq
                    <br />- Kosovo
                    <br />- Laos
                    <br />- Liberia
                    <br />- Nepal
                    <br />- North Korea
                    <br />- Malawi
                    <br />- Malaysia
                    <br />- Malta Montenegro
                    <br />- Morocco
                    <br />- Ontario (Canada)
                    <br />- Puerto Rico
                    <br />- The Philippines
                    <br />- Qatar
                    <br />- Republic of North Macedonia
                    <br />- United States of America
                    <br />- Uzbekistan
                    <br />- Serbia
                    <br />- South Sudan
                    <br />- Sudan
                    <br />- Syria
                    <br />- Yemen
                  </p>
                  <p>
                    Zimbabwe. LaunchZone has the sole discretion to update the
                    list of prohibited jurisdictions from time to time;
                  </p>
                  <p>
                    (ii) you are a member of any sanctions list or equivalent
                    maintained by the United States government, the United
                    Kingdom government, the European Union, or the Taiwan
                    government (“Restricted Persons”);
                  </p>
                  <p>
                    (iii) you intend to transact with any Restricted Territories
                    or Restricted Persons;
                  </p>
                  <p>
                    (iv) you are located, incorporated or otherwise established
                    in, or a citizen or resident of a jurisdiction where it
                    would be illegal under applicable laws for you (by reason of
                    your nationality, domicile, citizenship, residence or
                    otherwise) to access or use our services; or
                  </p>
                  <p>
                    (v) the publication or availability of our services is
                    prohibited or contrary to local law or regulation, or could
                    subject LaunchZone to any local registration or licensing
                    requirements. In order to comply with legal obligations
                    under applicable rules and regulations, we may conduct
                    AML/CFT procedure, anti-fraud procedure, and authentication
                    checks.
                  </p>
                  <h2 className='text-2xl font-medium'>3.RESTRICTED ACTIVITIES</h2>
                  <p>
                    In connection with your use of our services, you will not:
                  </p>
                  <p>
                    (i) violate or assist any party in violating any law,
                    statute, ordinance, regulation or any rule of any
                    self-regulatory or similar organization of which you are or
                    are required to be a member through your use of our
                    services;
                  </p>
                  <p>
                    (ii) provide false, inaccurate, incomplete or misleading
                    information;
                  </p>
                  <p>
                    (iii) infringe upon LaunchZone's or any third party's
                    copyright, patent, trademark, or intellectual property
                    rights;
                  </p>
                  <p>
                    (iv) engage in any illegal activity, including without
                    limitation illegal gambling, money laundering, fraud,
                    blackmail, extortion, ransoming data, the financing of
                    terrorism, other violent activities or any prohibited market
                    practices;
                  </p>
                  <p>
                    (v) distribute unsolicited or unauthorized advertising or
                    promotional material, written media releases, public
                    announcements and public disclosures, junk mail, spam or
                    chain letters;
                  </p>
                  <p>
                    (vi) take any action that imposes an unreasonable or
                    disproportionately large load on our infrastructure, or
                    detrimentally interfere with, intercept, or expropriate any
                    system, data or information; (
                  </p>
                  <p>
                    vii) transmit or upload any material to LaunchZone’s
                    products and/or services that contains viruses, Trojan
                    horses, worms, or any other harmful or deleterious programs;
                  </p>
                  <p>
                    (viii) transfer any rights granted to you under these Terms;
                  </p>
                  <p>
                    (ix) engage in any other activity which, in our reasonable
                    opinion, amounts to or may amount to market abuse including
                    without limitation the carrying out of fictitious
                    transactions or wash trades, front running or engaging in
                    disorderly market conduct; or
                  </p>
                  <p>
                    (x) engage in any behavior which is unlawful, violates these
                    Terms, or is otherwise deemed unacceptable by LaunchZone in
                    its sole discretion.
                  </p>
                  <h2 className='text-2xl font-medium'>4. FEES AND PRICE ESTIMATES</h2>
                  <p>
                    In connection with your use of our services, you are
                    required to pay all fees necessary for interacting with the
                    blockchain networks, including “gas” costs, as well as all
                    other fees reflected on LaunchZone’s products and/or
                    services at the time of your use. Although we attempt to
                    provide accurate fee information, this information reflects
                    our estimates of fees, which may vary from the actual fees
                    paid to use the services and interact with the blockchain
                    networks.
                  </p>
                  <h2 className='text-2xl font-medium'>5. NO PROFESSIONAL ADVICE OR FIDUCIARY DUTIES</h2>
                  <p>
                    not provide any other financial, investment, or legal advice
                    in connection with our service. To the extent that we or our
                    representatives provide trading recommendations, market
                    commentary, or any other information, the act of doing so is
                    incidental to your relationship with us and such information
                    should not be construed as investment or financial advice.
                    Any decision to buy or sell digital assets is the user’s
                    decision and we will not be liable for any loss suffered.
                    You accept the risk of trading digital assets. In entering
                    into any transaction via LaunchZone’s products and/or
                    services, you represent that you have been, are, and will be
                    solely responsible for making your own independent appraisal
                    and investigations into the risks of the transaction and the
                    underlying digital asset. You represent that you have
                    sufficient knowledge, market sophistication, professional
                    advice and experience to make your own evaluation of the
                    merits and risks of any transaction or any underlying
                    digital asset. The Terms are not intended to, and do not,
                    create or impose any fiduciary duties on us. To the fullest
                    extent permitted by law, you acknowledge and agree that we
                    owe no fiduciary duties or liabilities to you or any other
                    party.
                  </p>
                  <h2 className='text-2xl font-medium'> 6. OWNERSHIP OF DIGITAL ASSETS</h2>
                  <p>
                    You hereby represent and warrant to us that any digital
                    assets used by you in connection with our services are
                    either owned by you or that you are validly authorized to
                    carry out transactions using such digital assets.
                  </p>
                  <h2 className='text-2xl font-medium'> 7. TAXES</h2>
                  <p>
                    It is your responsibility to determine what, if any, taxes
                    apply to your activities on LaunchZone’s products and/or
                    services, and to collect, report, and remit the correct tax
                    to the appropriate tax authority. LaunchZone is not
                    responsible for determining whether taxes apply to your
                    transaction, or for collecting, reporting, or remitting any
                    taxes arising from any transaction.
                  </p>
                  <h2 className='text-2xl font-medium'>8. INDEMNIFICATION; RELEASE</h2>
                  <p>
                    You agree to indemnify and hold LaunchZone, its affiliates,
                    and service providers, and each of their officers,
                    directors, agents, joint ventures, employees, and
                    representatives harmless from any claim or demand (including
                    attorneys’ fees and any losses, fines, fees, or penalties
                    imposed by any regulatory authority) arising out of your
                    breach of these Terms, or your violation of any law or
                    regulation. The term “losses” means all net costs reasonably
                    incurred by us or the other persons referred to in this
                    Section which are the result of the matters set out in this
                    Section and which may relate to any claims, demands, causes
                    of action, debt, cost, expense or other liability, including
                    reasonable legal fees (without duplication). If you have a
                    dispute with one or more Users or third parties, you release
                    LaunchZone (and its affiliates and service providers, and
                    each of their officers, directors, agents, joint ventures,
                    employees, and representatives) from any and all claims,
                    demands, and damages (actual and consequential) of every
                    kind and nature arising out of or in any way connected with
                    such disputes. If you have a dispute with anyone other than
                    LaunchZone, you release us from liability associated with
                    that dispute.
                  </p>
                  <h2 className='text-2xl font-medium'>9. PRIVACY POLICY</h2>
                  <p>
                    This Privacy Policy (hereinafter “Policy) constitutes a part
                    of the Terms used in this Policy shall have the same
                    meanings as in the Terms except as otherwise provided
                    herein. This Policy explains how we collect, use, process,
                    disclose, share, transfer, and protect personal information
                    obtained through us and our partners. This Policy also
                    describes how we comply with our legal obligations to you,
                    and how we respect your ability to know, access, correct,
                    transfer, restrict the processing of, and delete, your data.
                    By using our platform, you agree to the collection, use,
                    storage, and disclosure of your data in accordance with our
                    Privacy Policy. We do not sell or lease the personal data
                    that we have collected (and will not do so without providing
                    a right to opt out).
                  </p>
                  <h3>9.1 Applicability of this Policy</h3>{" "}
                  <p>
                    This Policy applies to our services, which include the
                    services we provide on any other websites, pages, features,
                    or content we own or operating third party applications
                    relying on such an API, and related services.
                  </p>{" "}
                  <h3>9.2 Safety and Security</h3>{" "}
                  <p>
                    We may use acquired information to help maintain the safety,
                    security, and integrity of you and our services, including:
                  </p>
                  <p />
                  <h2 className='text-2xl font-medium'>10. DISCLAIMER</h2>
                  <p>
                    LaunchZone is a developer of open-source software does not
                    offer trade execution or clearing services and, therefore,
                    has no oversight, involvement, or control concerning your
                    transactions using our services. All transactions between
                    users of this open-source software are executed directly
                    between the users’ blockchain addresses through a smart
                    contract.
                  </p>
                  <p>
                    You understand and agree that LaunchZone’s products and/or
                    services enable access to an online, decentralized and
                    autonomous protocol and environment, and associated
                    decentralized networks, that are not controlled by the
                    LaunchZone.
                  </p>
                  <p>
                    We do not have access to your private key and cannot
                    initiate an interaction with your digital assets or
                    otherwise access your digital assets. We are not responsible
                    for any activities that you engage in when using your
                    wallet, or LaunchZone’s products and/or services. We cannot
                    and does not represent or guarantee that any of the
                    information available through the LaunchZone’s products
                    and/or services are accurate, reliable, current, complete or
                    appropriate for your needs.
                  </p>
                  <p>
                    You expressly understand and agree that your use of
                    LaunchZone’s products and/or services is at your sole risk.
                    We make and expressly disclaim all representations and
                    warranties, express, implied or statutory, and with respect
                    to LaunchZone’s products and/or services and the code
                    proprietary or open-source, we specifically do not represent
                    and warrant and expressly disclaim any representation or
                    warranty, express, implied or statutory, including without
                    limitation, any representations or warranties of title,
                    non-infringement, merchantability, usage, security,
                    suitability or fitness for any particular purpose, or as to
                    the workmanship or technical coding thereof, or the absence
                    of any defects therein, whether latent or patent.
                  </p>
                  <p>
                    You understand that we are not registered or licensed by the
                    CFTC, SEC, or any financial regulatory authority. No
                    financial regulatory authority has reviewed or approved the
                    use of LaunchZone’s products and/or services. Our services
                    do not constitute advice or a recommendation concerning any
                    commodity, security, or other digital asset or instrument.
                  </p>
                  <p>
                    You acknowledge that LaunchZone is not responsible for
                    transferring, safeguarding, or maintaining your private keys
                    or any digital assets associated therewith. If you lose,
                    mishandle or have stolen associated your private keys, you
                    acknowledge that you may not be able to recover associated
                    digital assets and that LaunchZone is not responsible for
                    such loss. You acknowledge that LaunchZone is not
                    responsible for any loss, damage or liability arising from
                    your failure to comply with the Terms hereunder.
                  </p>
                  <p>
                    OUR SERVICES ARE NOT OFFERED TO PERSONS OR ENTITIES WHO
                    RESIDE IN, ARE CITIZENS OF, ARE LOCATED IN, ARE INCORPORATED
                    IN, OR HAVE A REGISTERED OFFICE IN THE UNITED STATES OF
                    AMERICA (COLLECTIVELY, “US PERSONS”). MOREOVER, NONE OF OUR
                    OTHER SERVICES ARE OFFERED TO PERSONS OR ENTITIES WHO RESIDE
                    IN, ARE CITIZENS OF, ARE LOCATED IN, ARE INCORPORATED IN, OR
                    HAVE A REGISTERED OFFICE IN ANY RESTRICTED TERRITORY. WE DO
                    NOT MAKE EXCEPTIONS; THEREFORE, IF YOU ARE A US PERSON, THEN
                    DO NOT ATTEMPT TO USE OUR SERVICES AND IF YOU ARE A
                    RESTRICTED PERSON, THEN DO NOT ATTEMPT TO USE ANY OF OUR
                    SERVICES. USE OF A VIRTUAL PRIVATE NETWORK (“VPN”) TO
                    CIRCUMVENT THE RESTRICTIONS SET FORTH HEREIN IS PROHIBITED.
                  </p>
                  <h2 className='text-2xl font-medium'>11. LIMITATION OF LIABILITY; NO WARRANTY</h2>
                  <p>
                    YOU EXPRESSLY UNDERSTAND AND AGREE THAT LAUNCHZONE AND OUR
                    AFFILIATES AND SERVICE PROVIDERS, AND THEIR RESPECTIVE
                    OFFICERS, DIRECTORS, AGENTS, JOINT VENTURERS, EMPLOYEES, AND
                    REPRESENTATIVES WILL NOT BE LIABLE FOR ANY INDIRECT,
                    INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY DAMAGES, OR
                    DAMAGES FOR LOSS OF PROFITS INCLUDING WITHOUT LIMITATION
                    DAMAGES FOR LOSS OF GOODWILL, USE, DATA, OR OTHER INTANGIBLE
                    LOSSES (EVEN IF LAUNCHZONE HAS BEEN ADVISED OF THE
                    POSSIBILITY OF SUCH DAMAGES), WHETHER BASED ON CONTRACT,
                    TORT, NEGLIGENCE, OR OTHERWISE, RESULTING FROM: (I) THE USE
                    OR THE INABILITY TO USE THE SERVICES; (II) THE COST OF
                    PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES RESULTING FROM
                    ANY GOODS, DATA, INFORMATION, OR SERVICES PURCHASED OR
                    OBTAINED OR MESSAGES RECEIVED OR TRANSACTIONS ENTERED INTO
                    THROUGH OR FROM THE SERVICES; (III) UNAUTHORIZED ACCESS TO
                    OR ALTERATION OF YOUR TRANSMISSIONS OR DATA; OR (IV) ANY
                    OTHER MATTER RELATING TO THE SERVICES.
                  </p>
                  <p>
                    IN NO EVENT WILL THE AGGREGATE LIABILITY OF LAUNCHZONE, ITS
                    AFFILIATES AND THEIR RESPECTIVE SHAREHOLDERS, MEMBERS,
                    DIRECTORS, OFFICERS, EMPLOYEES, ATTORNEYS, AGENTS,
                    REPRESENTATIVES, SUPPLIERS OR CONTRACTORS ARISING OUT OF
                    SERVICES OFFERED BY OR ON BEHALF OF LAUNCHZONE AND ITS
                    AFFILIATES, ANY PERFORMANCE OR NON-PERFORMANCE OF LAUNCHZONE
                    SERVICES, OR ANY OTHER PRODUCT, SERVICE OR OTHER ITEM,
                    WHETHER UNDER CONTRACT, STATUTE, STRICT LIABILITY OR OTHER
                    THEORY, EXCEED THE AMOUNT OF THE FEES PAID BY YOU TO
                    LAUNCHZONE UNDER THESE TERMS IN THE TWELVE-MONTH PERIOD
                    IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM FOR
                    LIABILITY.
                  </p>
                  <p>
                    SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN
                    WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR
                    INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, SOME OF
                    THE LIMITATIONS SET FORTH ABOVE MAY NOT APPLY TO YOU. IF YOU
                    ARE DISSATISFIED WITH ANY PORTION OF THE SERVICES OR WITH
                    THIS AGREEMENT, YOUR SOLE AND EXCLUSIVE REMEDY IS TO
                    DISCONTINUE USE OF THE SERVICES. THE SERVICES ARE PROVIDED
                    “AS IS” AND WITHOUT ANY REPRESENTATION OR WARRANTY, WHETHER
                    EXPRESS OR IMPLIED. LAUNCHZONE, OUR AFFILIATES, AND OUR
                    RESPECTIVE OFFICERS, DIRECTORS, AGENTS, JOINT VENTURERS,
                    EMPLOYEES, AND SUPPLIERS SPECIFICALLY DISCLAIM ANY IMPLIED
                    WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A
                    PARTICULAR PURPOSE OR NON-INFRINGEMENT. LAUNCHZONE MAKES NO
                    WARRANTY THAT (I) THE SERVICES WILL MEET YOUR REQUIREMENTS,
                    (II) THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR
                    ERROR-FREE, OR (III) THE QUALITY OF ANY PRODUCTS, SERVICES,
                    INFORMATION, OR OTHER MATERIAL PURCHASED OR OBTAINED BY YOU
                    WILL MEET YOUR EXPECTATIONS.
                  </p>
                  <h2 className='text-2xl font-medium'>12. FORCE MAJEURE </h2>
                  <p>
                    LaunchZone shall have no liability for any failure or delay
                    resulting from any abnormal or unforeseeable circumstances
                    outside our reasonable control, the consequences of which
                    would have been unavoidable despite all efforts to the
                    contrary, including without limitation governmental action
                    or acts of terrorism, earthquake, fire, typhoons, floods,
                    wars, hacker attacks, computer virus invasions, or
                    regulatory changes which render this Agreement unlawful, or
                    other acts of God, labor conditions, delays or failures
                    caused by problems with another system or network,
                    mechanical breakdown or data-processing failures or where we
                    are bound by other legal obligations.
                  </p>
                  <h2 className='text-2xl font-medium'>13. GOVERNING LAW; VENUE </h2>
                  <p>
                    The laws of Taiwan shall govern these Terms. Except as
                    otherwise required by local law, any dispute between you and
                    LaunchZone related in any way to, or arising in any way
                    from, our Services or these Terms (“Dispute”) shall be
                    finally settled in the legal proceeding of Taipei District
                    Court. Any litigations shall take place in Taipei.
                  </p>
                  <h2 className='text-2xl font-medium'>14. ASSIGNMENT </h2>
                  <p>
                    You may not transfer or assign these Terms or any rights or
                    obligations you have under these Terms without our prior
                    written consent or otherwise and any such attempted
                    assignment shall be void. We reserve the right to freely
                    assign or transfer these Terms and the rights and
                    obligations of these Terms, to any third party at any time
                    without notice or consent. If you object to such transfer or
                    assignment, you may stop using our services and terminate
                    this agreement.
                  </p>
                  <h2 className='text-2xl font-medium'>15. THIRD PARTY CONTENT</h2>
                  <p>
                    We strives to provide accurate and reliable information and
                    content on LaunchZone’s products and/or services, but such
                    information may not always be correct, complete, or up to
                    date. We will update the information on LaunchZone’s
                    products and/or services as necessary to provide you with
                    the most up to date information, but you should always
                    independently verify such information. LaunchZone’s products
                    and/or services may also contain links to third party
                    websites, applications, events or other materials (“Third
                    Party Content”). Such information is provided for your
                    convenience and links or references to Third Party Content
                    do not constitute an endorsement by our products or
                    services. We shall have no liability for any losses incurred
                    as a result of actions taken in reliance on the information
                    contained on LaunchZone’s products and/or services or in any
                    Third-Party Content.
                  </p>
                  <h2 className='text-2xl font-medium'>16. AMENDMENTS</h2>
                  <p>
                    We may amend any portion of these Terms at any time by
                    posting the revised version of these Terms with an updated
                    revision date. The changes will become effective, and shall
                    be deemed accepted by you, the first time you use our
                    services after the initial posting of the revised agreement
                    and shall apply on a going-forward basis with respect to
                    transactions initiated after the posting date. In the event
                    that you do not agree with any such modification, your sole
                    and exclusive remedy is to terminate your use of
                    LaunchZone’s products and/or services. You agree that we
                    shall not be liable to you or any third party as a result of
                    any losses suffered by any modification or amendment of
                    these Terms.
                  </p>
                  <h2 className='text-2xl font-medium'>17. ENTIRE AGREEMENT </h2>
                  <p>
                    The failure of LaunchZone to exercise or enforce any right
                    or provision of the Agreement shall not constitute a waiver
                    of such right or provision. If any provision of these Terms
                    shall be adjudged by any court of competent jurisdiction to
                    be unenforceable or invalid, that provision shall be limited
                    or eliminated to the minimum extent necessary so that these
                    Terms shall otherwise remain in full force and effect and
                    remain enforceable between the parties. The headings and any
                    explanatory text are for reference purposes only and in no
                    way define, limit, construe, or describe the scope or extent
                    of such section. These Terms, including LaunchZone’s
                    policies governing our services, constitute the entire
                    agreement between you and LaunchZone with respect to the use
                    of our services.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-5 mt-5">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" checked={isChecked} onCheckedChange={(_)=>setIsChecked(_)}/>
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
            </div>
            <div className="flex w-full justify-center">
              <Button onClick={onClickContinue} disabled={!isChecked}>
                Continue
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
