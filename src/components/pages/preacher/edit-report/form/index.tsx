import { useFormik } from "formik";
import * as yup from "yup";
import Select from "react-select";

import Button from "@/components/button";
import useStyles from "./style";

interface Props {
  onClose?: () => void;
}

const Form = (props: Props) => {
  const { onClose } = props;
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      publication: 0,
      video: 0,
      hour: 0,
      visit: 0,
      study: 0,
      note: "",
    },
    validationSchema: yup.object({
      publication: yup
        .number()
        .required("Ilaina ity")
        .min(0, "Tokony mihoatran'ny na mitovy amin'ny 0")
        .integer("Tokony ho isa tsy misy faingo"),
      video: yup
        .number()
        .required("Ilaina ity")
        .min(0, "Tokony mihoatran'ny na mitovy amin'ny 0")
        .integer("Tokony ho isa tsy misy faingo"),
      hour: yup
        .number()
        .required("Ilaina ity")
        .min(0, "Tokony mihoatran'ny na mitovy amin'ny 0")
        .integer("Tokony ho isa tsy misy faingo"),
      visit: yup
        .number()
        .required("Ilaina ity")
        .min(0, "Tokony mihoatran'ny na mitovy amin'ny 0")
        .integer("Tokony ho isa tsy misy faingo"),
      study: yup
        .number()
        .required("Ilaina ity")
        .min(0, "Tokony mihoatran'ny na mitovy amin'ny 0")
        .max(
          yup.ref("visit"),
          "Tsy mitombina hoe betsaka kokoa nohon'ny fiverenana mitsidika"
        )
        .integer("Tokony ho isa tsy misy faingo"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const hasError =
    formik.errors.publication ||
    formik.errors.video ||
    formik.errors.hour ||
    formik.errors.visit ||
    formik.errors.study;

  return (
    <div>
      {hasError && (
        <div className={classes.errorContainer}>
          {formik.errors.publication && formik.touched.publication && (
            <div className={classes.error}>
              <strong>Zavatra napetraka:</strong>
              {formik.errors.publication}
            </div>
          )}
          {formik.errors.video && formik.touched.video && (
            <div className={classes.error}>Video: {formik.errors.video}</div>
          )}
          {formik.errors.hour && formik.touched.hour && (
            <div className={classes.error}>Ora: {formik.errors.hour}</div>
          )}
          {formik.errors.visit && formik.touched.visit && (
            <div className={classes.error}>
              Fitsidihana: {formik.errors.visit}
            </div>
          )}
          {formik.errors.study && formik.touched.study && (
            <div className={classes.error}>
              Fampianarana: {formik.errors.study}
            </div>
          )}
        </div>
      )}
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.fieldContainer}>
          <label htmlFor="publication">Zavatra napetraka</label>
          <input
            id="publication"
            name="publication"
            type="number"
            onChange={formik.handleChange}
            className={`${classes.input} ${
              formik.errors.publication ? classes.inputError : ""
            }`}
            value={formik.values.publication}
          />
        </div>

        <div className={classes.fieldContainer}>
          <label htmlFor="video">Video</label>
          <input
            id="video"
            name="video"
            type="number"
            onChange={formik.handleChange}
            className={`${classes.input} ${
              formik.errors.video ? classes.inputError : ""
            }`}
            value={formik.values.video}
          />
        </div>

        <div className={classes.fieldContainer}>
          <label htmlFor="hour">Ora</label>
          <input
            id="hour"
            name="hour"
            type="number"
            onChange={formik.handleChange}
            className={`${classes.input} ${
              formik.errors.hour ? classes.inputError : ""
            }`}
            value={formik.values.hour}
          />
        </div>

        <div className={classes.fieldContainer}>
          <label htmlFor="visit">Fitsidihana</label>
          <input
            id="visit"
            name="visit"
            type="number"
            onChange={formik.handleChange}
            className={`${classes.input} ${
              formik.errors.visit ? classes.inputError : ""
            }`}
            value={formik.values.visit}
          />
        </div>

        <div className={classes.fieldContainer}>
          <label htmlFor="study">Fampianarana</label>
          <input
            id="study"
            name="study"
            type="number"
            onChange={formik.handleChange}
            className={`${classes.input} ${
              formik.errors.study ? classes.inputError : ""
            }`}
            value={formik.values.study}
          />
        </div>

        <hr className={classes.hr} />

        <div className={classes.fieldContainerNote}>
          <label htmlFor="note">Fanamarihana</label>
          <textarea
            id="note"
            name="note"
            onChange={formik.handleChange}
            className={classes.noteInput}
            value={formik.values.note}
          />
        </div>

        <Select
          isMulti
          options={[
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" },
            { value: "cookie", label: "Cookie" },
            { value: "peanut", label: "Peanut" },
            { value: "almond", label: "Almond" },
            { value: "hazelnut", label: "Hazelnut" },
            { value: "pecan", label: "Pecan" },
            { value: "pistachio", label: "Pistachio" },
          ]}
        />
        <div className={classes.bottomContainer}>
          <Button variant="secondary" label="Hiala" onClick={onClose} />
          <Button type="submit" variant="primary" label="Ampidirina" />
        </div>
      </form>
    </div>
  );
};

export default Form;
