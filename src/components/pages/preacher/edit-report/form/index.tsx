import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import type { TWorkingMonth } from "@/types/month";
import { apiReport, apiSendReport } from "@/services/report";
import { getPreacher } from "@/services/preacher";
import ErrorContainer from "@/components/forms/error-container";
import FilterTags from "@/components/filter-tags";
import Button from "@/components/button";
import useStyles from "./style";

interface Props {
  id: number;
  onClose?: () => void;
  workingMonth: TWorkingMonth;
  update: () => void;
}

const Form = (props: Props) => {
  const { id, onClose, workingMonth, update } = props;
  const [submitting, setSubmitting] = useState(false);
  const classes = useStyles();
  const formik = useFormik<{
    publication: number;
    video: number;
    hour: number;
    visit: number;
    study: number;
    note: string;
    tagIds: number[];
  }>({
    initialValues: {
      publication: 0,
      video: 0,
      hour: 0,
      visit: 0,
      study: 0,
      note: "",
      tagIds: [],
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
      setSubmitting(true);
      apiSendReport(id, workingMonth, values)
        .then(() => {
          update();
        })
        .finally(() => setSubmitting(false));
    },
  });

  useEffect(() => {
    apiReport(id, workingMonth).then((report) => {
      if (report === null) {
        formik.resetForm();
        getPreacher(id).then((res) => {
          let tags: number[] = [];
          console.log(res);
          res.tags.forEach((tag) => {
            if (tag.current !== undefined) {
              tags.push(tag.id);
            }
          });

          formik.setFieldValue("tagIds", tags);
        });
      } else {
        formik.setFieldValue("publication", report.publication);
        formik.setFieldValue("video", report.video);
        formik.setFieldValue("hour", report.hour);
        formik.setFieldValue("visit", report.visit);
        formik.setFieldValue("study", report.study);
        formik.setFieldValue("note", report.note);
        formik.setFieldValue(
          "tagIds",
          report.Tags.map((tag) => tag.id)
        );
      }
    });
  }, [workingMonth]);

  const setTagIds = (value: number[]) => {
    formik.setFieldValue("tagIds", value);
  };

  const hasError =
    formik.errors.publication ||
    formik.errors.video ||
    formik.errors.hour ||
    formik.errors.visit ||
    formik.errors.study;

  return (
    <div>
      <ErrorContainer
        errors={[
          { prefix: "Zavatra napetraka", message: formik.errors.publication },
          { prefix: "Video", message: formik.errors.video },
          { prefix: "Ora", message: formik.errors.hour },
          { prefix: "Fitsidihana", message: formik.errors.visit },
          { prefix: "Fampianarana", message: formik.errors.study },
        ]}
      />
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

        <div className={classes.fieldContainerCol}>
          <label htmlFor="note">Fanamarihana</label>
          <textarea
            id="note"
            name="note"
            onChange={formik.handleChange}
            className={classes.noteInput}
            value={formik.values.note}
          />
        </div>

        <div className={classes.fieldContainerCol}>
          <label htmlFor="tag">Marika</label>
          <FilterTags active={formik.values.tagIds} onChange={setTagIds} />
        </div>
        <div className={classes.bottomContainer}>
          <Button variant="secondary" label="Hiala" onClick={onClose} />
          <Button
            type="submit"
            variant="primary"
            label="Ampidirina"
            loading={submitting}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
