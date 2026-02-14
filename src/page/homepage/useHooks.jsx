import { yupResolver } from "@hookform/resolvers/yup";
import { format } from "date-fns";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useToast } from "../../provider/ToastProvider";

const useHooks = () => {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  const initValues = {
    birthday: null,
    anniversary: null,
    firstGift: null,
  };

  const schemaFormValidation = yup.object({
    birthday: yup.date().required("ช่วยตอบเค้าคำถามหน่อยน้า..."),
    anniversary: yup.date().required("ช่วยตอบเค้าคำถามหน่อยน้า..."),
    firstGift: yup.string().required("ช่วยตอบเค้าคำถามหน่อยน้า..."),
  });

  const {
    control,
    reset,
    getValues,
    setValue,
    watch,
    trigger,
    formState: { errors, isDirty },
    setError,
  } = useForm({
    mode: "onChange",
    defaultValues: initValues,
    resolver: yupResolver(schemaFormValidation),
  });

  const handleChangeStep = (selectStep) => {
    setStep(selectStep);
  };

  const getFormErrorMessage = (name) => {
    return errors?.[name] ? (
      <small className="p-error">{errors?.[name]?.message}</small>
    ) : (
      ""
    );
  };

  const handleSubmitStep2 = async () => {
    const isPerfectData = await trigger();

    if (isPerfectData) {
      if (
        format(getValues("birthday"), "dd-MM-yyyy") == "24-02-2002" &&
        format(getValues("anniversary"), "dd-MM-yyyy") == "21-02-2024" &&
        getValues("firstGift") == "1"
      ) {
        toastAlert({
          severity: "success",
          message: (
            <span>
              ใช่ที่รักของเค้าจริงๆด้วย
              <i className="pi pi-heart" style={{ fontSize: "1rem" }} />{" "}
              รักนะคะเปาเป่ยจุ๊บๆ
            </span>
          ),
        });

        handleChangeStep(3);
      } else {
        toastAlert({
          severity: "warn",
          message: "หื้ออออ ดูเหมือนจะไม่ใช่เปาเป่ยของเค้านะ",
        });
      }
    }
  };

  /**
   *
   * @param {object} param
   * @param {"success" | "warn"} param.severity
   * @param {*} param.message
   */
  const toastAlert = ({ severity, message }) => {
    switch (severity) {
      case "success":
        return toast.current.show({
          severity: "success",
          summary: "ถูกต้องแล้วเย้ๆ",
          detail: message,
          life: 5000,
        });
      case "warn":
        return toast.current.show({
          severity: "warn",
          summary: "ผิดอะแย่จัง :(",
          detail: message,
          life: 5000,
        });
      default:
        break;
    }
  };

  const handleClickNoBaobei = () => {
    toastAlert({
      severity: "warn",
      message:
        'ดูเหมือนว่าจะมีคนแอบเข้ามาดูนะเค้าส่งให้แค่ที่รักของเค้า "ณัฐธิดา โพธิ์อ่อง" คนเดียวเท่านั้น!',
    });
  };

  return {
    step,
    control,
    handleChangeStep,
    getFormErrorMessage,
    handleSubmitStep2,
    handleClickNoBaobei,
  };
};

export default useHooks;
