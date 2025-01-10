import '@/app/ui/hiring/form.css';


export default function Hiring() {
    return (
        <form action="#" className="form-wrap">
        <header>
          <h2>Get In Touch</h2>
          {/* <div>
            This form breaks at 600px and goes from a left-label form to a top-label
            form. At above 1200px, the labels align right.
          </div> */}
        </header>
        <div>
          <label className="desc" id="title1" htmlFor="Field1">
            姓名
          </label>
          <div>
            <input
              id="Field1"
              name="Field1"
              type="text"
              className="field text fn"
              defaultValue=""
              size={8}
              tabIndex={1}
            />
          </div>
        </div>
        <div>
          <label className="desc" id="title3" htmlFor="Field3">
            Email
          </label>
          <div>
            <input
              id="Field3"
              name="Field3"
              type="email"
              spellCheck="false"
              defaultValue=""
              maxLength={255}
              tabIndex={3}
            />
          </div>
        </div>
        <div>
          <label className="desc" id="title4" htmlFor="Field4">
            訊息
          </label>
          <div>
            <textarea
              id="Field4"
              name="Field4"
              spellCheck="true"
              rows={10}
              cols={50}
              tabIndex={4}
              defaultValue={""}
            />
          </div>
        </div>
        <div>
          <label className="desc" id="title5" htmlFor="Field5">
            電話/分機/其他聯絡方式
          </label>
          <div>
            <textarea
              id="Field5"
              name="Field5"
              spellCheck="true"
              rows={10}
              cols={50}
              tabIndex={5}
              defaultValue={""}
            />
          </div>
        </div>
        {/* <div>
          <fieldset>
            <legend id="title5" className="desc">
              Select a Choice
            </legend>
            <div>
              <input
                id="radioDefault_5"
                name="Field5"
                type="hidden"
                defaultValue=""
              />
              <div>
                <input
                  id="Field5_0"
                  name="Field5"
                  type="radio"
                  defaultValue="First Choice"
                  tabIndex={5}
                  defaultChecked="checked"
                />
                <label className="choice" htmlFor="Field5_0">
                  First Choice
                </label>
              </div>
              <div>
                <input
                  id="Field5_1"
                  name="Field5"
                  type="radio"
                  defaultValue="Second Choice"
                  tabIndex={6}
                />
                <label className="choice" htmlFor="Field5_1">
                  Second Choice
                </label>
              </div>
              <div>
                <input
                  id="Field5_2"
                  name="Field5"
                  type="radio"
                  defaultValue="Third Choice"
                  tabIndex={7}
                />
                <label className="choice" htmlFor="Field5_2">
                  Third Choice
                </label>
              </div>
            </div>
          </fieldset>
        </div>*/}
        <div> 
          <fieldset>
            <legend id="title6" className="desc">
            希望被聯絡時段
            </legend>
            <div>
              <div>
                <input
                  id="Field6"
                  name="Field6"
                  type="checkbox"
                  defaultValue="First Choice"
                  tabIndex={8}
                />
                <label className="choice" htmlFor="Field6">
                    9:00 - 11:00
                </label>
              </div>
              <div>
                <input
                  id="Field7"
                  name="Field7"
                  type="checkbox"
                  defaultValue="Second Choice"
                  tabIndex={9}
                />
                <label className="choice" htmlFor="Field7">
                13:00 - 15:00
                </label>
              </div>
              <div>
                <input
                  id="Field8"
                  name="Field8"
                  type="checkbox"
                  defaultValue="Third Choice"
                  tabIndex={10}
                />
                <label className="choice" htmlFor="Field8">
                15:00 - 17:00
                </label>
              </div>
            </div>
          </fieldset>
        </div>
        <div>
          <label className="desc" id="title106" htmlFor="Field106">
            共好主題
          </label>
          <div>
            <select
              id="Field106"
              name="Field106"
              className="field select medium"
              tabIndex={11}
            >
              <option value="First Choice">加入團隊</option>
              <option value="Second Choice">產品供應</option>
              <option value="Third Choice">品牌互惠</option>
            </select>
          </div>
        </div>
        <div className='sub-btn-wrap'>
            <input
              id="saveForm"
              className="submit-btn"
              name="saveForm"
              type="submit"
              defaultValue="Submit"
            />
        </div>
      </form>
)};