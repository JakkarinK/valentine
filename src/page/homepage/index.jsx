import { Button } from "primereact/button";
import useHooks from "./useHooks";
import { Fieldset } from "primereact/fieldset";
import { motion } from "motion/react";
import { Calendar } from "primereact/calendar";
import { Controller } from "react-hook-form";

import { RadioButton } from "primereact/radiobutton";
import VDO1 from "../../assets/vdo1.mov";
import VDO2 from "../../assets/vdo2.mov";
import VDO3 from "../../assets/vdo3.mp4";
import IMG_E from "../../assets/E.jpg";
import IMG_N from "../../assets/N.jpg";
const RenderStep1 = ({ handleChangeStep, handleClickNoBaobei }) => {
  return (
    <>
      <span className="text-xl">Hi' Baobei</span>
      <span className="text-xl">คุณใช่ นางสาว ณัฐธิดา โพธิ์อ่องรึป่าว?</span>
      <div className="flex gap-3">
        <Button
          severity="success"
          onClick={() => {
            handleChangeStep(2);
            const audio = document.getElementById("myAudio");
            audio.play();
          }}
        >
          Yes
        </Button>
        <Button severity="danger" onClick={handleClickNoBaobei}>
          No
        </Button>
      </div>
    </>
  );
};

const RenderStep2 = ({ getFormErrorMessage, control, handleSubmit }) => {
  return (
    <>
      <span className="text-xl">
        ถ้าเป็นณัฐธิดา โพธิ์อ่องจริงๆ คุณต้องตอบคำถามพวกนี้ได้!
      </span>
      <Fieldset className="w-full" legend="เจ้าเอิร์ท เกิดวันที่เท่าไหร่">
        <div className="field">
          <Controller
            name="birthday"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <div className="flex flex-column gap-2">
                <Calendar
                  ref={field.ref}
                  value={field.value}
                  onChange={field.onChange}
                  maxDate={new Date()}
                  placeholder="เลือกเค้าหน่อย"
                  dateFormat="dd MM yy"
                  prevIcon={"pi pi-angle-left"}
                  nextIcon={"pi pi-angle-right"}
                />

                {getFormErrorMessage(field.name)}
              </div>
            )}
          />
        </div>
      </Fieldset>
      <Fieldset className="w-full" legend="วันครบรอบของเราคือวันไหน">
        <Controller
          name="anniversary"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <div className="flex flex-column gap-2">
              <Calendar
                ref={field.ref}
                value={field.value}
                onChange={field.onChange}
                maxDate={new Date()}
                placeholder="เลือกเค้าหน่อย"
                dateFormat="dd MM yy"
                prevIcon={"pi pi-angle-left"}
                nextIcon={"pi pi-angle-right"}
              />

              {getFormErrorMessage(field.name)}
            </div>
          )}
        />
      </Fieldset>
      <Fieldset
        className="w-full"
        legend="ของชิ้นแรกที่ซื้อให้เจ้าเอิร์ทคืออะไร"
      >
        <Controller
          name="firstGift"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <div className="flex flex-column gap-2">
              <div className="flex flex-wrap gap-3">
                <div className="flex align-items-center">
                  <RadioButton
                    inputId="gift-value-1"
                    name="gift-value-1"
                    value="1"
                    onChange={field.onChange}
                    checked={field.value == "1"}
                  />
                  <label htmlFor="gift-value-1" className="ml-2">
                    ไอติม
                  </label>
                </div>
                <div className="flex align-items-center">
                  <RadioButton
                    inputId="gift-value-2"
                    name="gift-value-2"
                    value="2"
                    onChange={field.onChange}
                    checked={field.value == "2"}
                  />
                  <label htmlFor="gift-value-2" className="ml-2">
                    มีด
                  </label>
                </div>
                <div className="flex align-items-center">
                  <RadioButton
                    inputId="gift-value-3"
                    name="gift-value-3"
                    value="3"
                    onChange={field.onChange}
                    checked={field.value == "3"}
                  />
                  <label htmlFor="gift-value-3" className="ml-2">
                    กางเกง Adidas
                  </label>
                </div>
              </div>
              {getFormErrorMessage(field.name)}
            </div>
          )}
        />
      </Fieldset>

      <div className="flex gap-3">
        <Button severity="success" onClick={handleSubmit}>
          ส่งคำตอบ
        </Button>
      </div>
    </>
  );
};

const RenderStep3 = ({ handleChangeStep }) => {
  const initial = { opacity: 0, scale: 0.5 };
  const animate = { opacity: 1, scale: 1 };
  const transition = (delay = 0.5) => {
    return { duration: 0.8, delay: delay, ease: [0, 0.71, 0.2, 1.01] };
  };

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition()}
      className="md:w-30rem flex flex-column gap-1"
    >
      <motion.span
        initial={initial}
        animate={animate}
        transition={transition(1)}
      >
        ว้าว มาถึงตรงนี้แล้วหรอเย้ๆ ขอบคุณนะที่เล่นตอบคำถามให้เค้าด้วย
        <i className="pi pi-face-smile" style={{ fontSize: "1rem" }} />
      </motion.span>
      <motion.span
        initial={initial}
        animate={animate}
        transition={transition(3)}
      >
        ไหนๆก็มาถึงตรงนี้แล้วเปาเปามีอะไรจะบอกเปาเป่ยด้วย
      </motion.span>
      <motion.span
        initial={initial}
        animate={animate}
        transition={transition(5)}
      >
        ก่อนอื่นเลย สุขสันวันวาเลนไทน์นะ
        <i className="pi pi-gift" style={{ fontSize: "1rem" }} />
      </motion.span>
      <motion.span
        initial={initial}
        animate={animate}
        transition={transition(7)}
      >
        ขอบคุณนะที่ยังอยู่ด้วยกันจนมาครบวาเลนไทน์อีกปีแล้ว
      </motion.span>
      <motion.span
        initial={initial}
        animate={animate}
        transition={transition(9)}
      >
        ปีนี้เปาเปาอาจจะไม่มีของขวัญให้ที่รัก
      </motion.span>
      <motion.span
        initial={initial}
        animate={animate}
        transition={transition(11)}
      >
        แต่เปาเปาก็ขอส่งความรักกับความคิดถึงไปให้นะ
      </motion.span>
      <motion.span
        initial={initial}
        animate={animate}
        transition={transition(13)}
      >
        ขอบคุณนะคะที่อยู่ด้วยกันกับเด็กดื้อคนนี้มาขนาดนี้
      </motion.span>
      <motion.span
        initial={initial}
        animate={animate}
        transition={transition(15)}
      >
        เค้าอยากบอกที่รักว่าเค้ารักที่รักมากๆนะ
      </motion.span>
      <motion.span
        initial={initial}
        animate={animate}
        transition={transition(17)}
      >
        เค้าขอโทษนะที่ทำตัวไม่ดีกับที่รัก
      </motion.span>
      <motion.span
        initial={initial}
        animate={animate}
        transition={transition(19)}
      >
        แต่เค้าก็อยากจะขอโอกาสอีกสักครั้ง
      </motion.span>
      <motion.span
        initial={initial}
        animate={animate}
        transition={transition(21)}
      >
        ถึงแม้ว่าเค้าจะรู้อยู่แล้วว่าที่รักให้โอกาสเค้าหลายรอบแล้ว
      </motion.span>
      <motion.span
        initial={initial}
        animate={animate}
        transition={transition(23)}
      >
        แต่ว่าเค้ารักที่รักมากๆนะ เค้าอยากอยู่ด้วยเค้าขอโอกาสครั้งสุดท้ายนะคะ
      </motion.span>
      <motion.span
        initial={initial}
        animate={animate}
        transition={transition(25)}
      >
        ถึงแม้ว่าตอนนี้เปาเปาจะไม่มีอะไรเป็นหลักประกันอีกต่อไป
        หรือว่าทรัพย์สินเงินทองอะไรแล้วก็ตาม
        แต่เปาเปาจะใช้ความซื่อสัตย์นับจากนี้เป็นหลักประกันในการอยู่ด้วยกัน
      </motion.span>
      <motion.span
        initial={initial}
        animate={animate}
        transition={transition(27)}
      >
        ขอโอกาสอีกครั้งนึงนะคะให้เปาเปาได้ใช้ทั้งชีวิตนี้ชดใช้กับความผิดที่ทำกับที่รักไป
      </motion.span>
      <motion.span
        initial={initial}
        animate={animate}
        transition={transition(29)}
      >
        สุดท้ายนี้ไม่ว่าจะเป็นยังไงหรือเกิดอะไรขึ้นกับเปาเปา
        เปาเปาอยากบอกที่รัก...
      </motion.span>
      <motion.span
        initial={initial}
        animate={animate}
        transition={transition(31)}
      >
        ว่าเปาเปารักเปาเป่ยมากๆนะคะ
        ขอบคุณทุกความรู้สึกดีๆแล้วเวลาที่ใช้ร่วมกับทุกเสี้ยววินาทีนะ
        <i className="pi pi-heart" style={{ fontSize: "1rem" }} />
      </motion.span>
      <motion.div
        className="mx-auto"
        initial={initial}
        animate={animate}
        transition={transition(34)}
      >
        <Button severity="danger" onClick={() => handleChangeStep(4)}>
          มีอะไรให้ดูอีกนิดหน่อยด้วยนะ ลองกดดูสิ
        </Button>
      </motion.div>
    </motion.div>
  );
};

const RenderStep4 = () => {
  return (
    <div className="flex flex-wrap gap-2 justify-content-center align-items-center">
      <img src={IMG_N} alt="N" style={{ width: "150px", height: "150px" }} />
      <div className="h-30rem overflow-y-scroll flex flex-column gap-1">
        <video width="400" height="400px" controls>
          <source src={VDO1} type="video/mp4" />
        </video>
        <video width="400" height="400px" controls>
          <source src={VDO2} type="video/mp4" />
        </video>
        <video width="400" controls>
          <source src={VDO3} type="video/mp4" />
        </video>
      </div>
      <img src={IMG_E} alt="E" style={{ width: "150px", height: "150px" }} />
    </div>
  );
};

const Index = () => {
  const {
    step,
    handleChangeStep,
    getFormErrorMessage,
    control,
    handleSubmitStep2,
    handleClickNoBaobei,
  } = useHooks();

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <RenderStep1
            handleChangeStep={handleChangeStep}
            handleClickNoBaobei={handleClickNoBaobei}
          />
        );
      case 2:
        return (
          <RenderStep2
            getFormErrorMessage={getFormErrorMessage}
            control={control}
            handleSubmit={handleSubmitStep2}
          />
        );
      case 3:
        return <RenderStep3 handleChangeStep={handleChangeStep} />;
      case 4:
        return <RenderStep4 />;
      default:
        return;
    }
  };

  return (
    <div
      className="flex flex-column gap-4 align-items-center p-5 border-round-2xl"
      style={{ backgroundColor: "var(--pink-100)" }}
    >
      {renderStep()}
    </div>
  );
};

export default Index;
