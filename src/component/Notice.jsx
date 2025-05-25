import { useLocation } from "react-router-dom";

const Notice = () => {
    const location = useLocation();
  const isBuyPage = location.pathname === '/buy/';
    return (
              <div className={`bg-black p2-9 text-white ${isBuyPage ? 'mt-5' : ''}`}>
        <div className="noticeLabel">
        <h3 className="mb-3">NOTICES</h3>

        <p className="mb-3 f-style-systemui">
          These Offering Materials May Contain Forward-Looking Statements And Information Relating To, 
          Among Other Things, The Company, Its Business Plan And Strategy, And Its Industry. 
          These Forwardlooking Statements Are Based On The Beliefs Of, Assumptions Made By, 
          And Information Currently Available To The Company’s Management. When Used In The Offering Materials, 
          The Words “Estimate,” “Project,” “Believe,” “Anticipate,” “Intend,” “Expect” And Similar Expressions 
          Are Intended To Identify Forward-Looking Statements. These Statements Reflect Management’s Current Views 
          With Respect To Future Events And Are Subject To Risks And Uncertainties That Could Cause The Company’s 
          Actual Results To Differ Materially From Those Contained In The Forward-Looking Statements. Investors Are 
          Cautioned Not To Place Undue Reliance On These Forward-Looking Statements, Which Speak Only As Of The Date 
          On Which They Are Made. The Company Does Not Undertake Any Obligation To Revise Or Update These Forward-Looking 
          Statements To Reflect Events Or Circumstances After Such Date Or To Reflect The Occurrence Of Unanticipated 
          Events.
        </p>

        <p className="mb-3 f-style-systemui">
          Please Note Investors In This Offering Will Be Clients Of The Issuer And Not Dalmore Group, Llc (“Dalmore”), 
          A Registered Broker-Dealer And Member Finra/Sipc. Dalmore’s Role In The Transaction Is To Facilitate Back Office 
          And Regulatory Functions Related To The Regulation A Transaction, And Acts Only As The Broker/Dealer Of Record 
          For The Offering Listed.
        </p>

        <p className="mb-3 f-style-systemui">
          Dalmore Is Not Providing Investment Advice Or Recommendations, Or Legal Or Tax Advice. This Reg A Investment Is
          Speculative, Illiquid, And Involves A High Degree Of Risk, Including The Possible Loss Of Your Entire Investment.
          All Investors Should Make Their Own Determination, With The Assistance Of Their Own Financial Or Other Advisors, 
          As To Whether Or Not To Make Any Investment, Based On Their Own Independent Evaluation, Analysis And Circumstances.
        </p>

        <p className="mb-3 f-style-systemui">
          An Offering Statement Regarding This Offering Has Been Filed With The Sec. The Sec Has Qualified That Offering 
          Statement, Which Only Means That The Company May Make Sales Of The Securities Described By The Offering 
          Statement. It Does Not Mean That The Sec Has Approved, Passed Upon The Merits Or Passed Upon The Accuracy Or 
          Completeness Of The Information In The Offering Statement.
        </p>

        <p className="f-style-systemui">
          The Offering Circular That Is Part Of That Offering Statement Is At Nary Offering. 
          Click To View The S-1a Filing.
        </p>
      </div>
    </div>
    )
}

export default Notice