import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { IconPlus } from "@tabler/icons";

import { apiSendPreacher, getPreacherList } from "@/services/preacher";
import ErrorContainer from "@/components/forms/error-container";
import Field from "@/components/pages/edit-preacher/field";
import Phone from "@/components/pages/edit-preacher/phone";
import Date from "@/components/pages/edit-preacher/date";
import FilterTags from "@/components/filter-tags";
import Surface from "@/components/surface";
import Button from "@/components/button";
import useStyles from "./style";

const EditPreacherPage = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [submitting, setSubmitting] = useState(false);

  const formik = useFormik<{
    id: number;
    group: number;
    firstname: string;
    lastname: string;
    displayname: string;
    birth: string | null;
    baptism: string | null;
    address: string;
    phones: string[];
    tagIds: number[];
  }>({
    initialValues: {
      id: 0,
      group: 0,
      firstname: "",
      lastname: "",
      displayname: "",
      birth: null,
      baptism: null,
      address: "",
      phones: [],
      tagIds: [],
    },
    validationSchema: yup.object({
      id: yup
        .number()
        .required("Ilaina ity")
        .min(0, "Tokony mihoatran'ny na mitovy amin'ny 0")
        .test("FreeId", "Efa misy manana io nomerao io", async (value) => {
          if (!value) {
            return false;
          }

          const res = await getPreacherList();
          return !res.includes(value);
        })
        .integer("Tokony ho isa tsy misy faingo"),
      group: yup
        .number()
        .required("Ilaina ity")
        .min(0, "Tokony mihoatran'ny na mitovy amin'ny 0")
        .integer("Tokony ho isa tsy misy faingo"),
      firstname: yup.string().required("Ilaina ity"),
    }),
    onSubmit: (values) => {
      setSubmitting(true);
      apiSendPreacher(parseInt(id || "0"), values).finally(() =>
        setSubmitting(false)
      );
    },
  });

  useEffect(() => {
    getPreacherList().then((res) => {
      let freeId = 1;
      while (res.includes(freeId)) {
        freeId++;
      }

      formik.setFieldValue("id", freeId);
    });
  }, []);

  const setTagIds = (value: number[]) => {
    formik.setFieldValue("tagIds", value);
  };

  return (
    <div className={classes.container}>
      <div className={classes.mainContainer}>
        <ErrorContainer
          errors={[
            { prefix: "Numero", message: formik.errors.id },
            { prefix: "Groupe", message: formik.errors.group },
            { prefix: "Fanampin'anarana", message: formik.errors.firstname },
          ]}
        />
        <form onSubmit={formik.handleSubmit}>
          <Surface title="Mombamomba azy">
            <Field
              id="firstname"
              label="Fanampin'anarana"
              onChange={formik.handleChange}
              value={formik.values.firstname}
              error={formik.errors.firstname}
            />
            <Field
              id="lastname"
              label="Anarana"
              onChange={formik.handleChange}
              value={formik.values.lastname}
              error={formik.errors.lastname}
            />
            <Field
              id="displayname"
              label="Anarana miseho"
              onChange={formik.handleChange}
              value={formik.values.displayname}
              error={formik.errors.displayname}
            />
          </Surface>
          <Surface title="Daty">
            <Date
              id="birth"
              label="Teraka"
              onChange={(event) =>
                formik.setFieldValue("birth", event.currentTarget.value)
              }
              error={formik.errors.birth}
            />
            <Date
              id="baptism"
              label="Teraka"
              onChange={(event) =>
                formik.setFieldValue("baptism", event.currentTarget.value)
              }
              error={formik.errors.baptism}
            />
          </Surface>
          <Surface title="Fiangonana">
            <Field
              number
              id="group"
              label="Groupe"
              onChange={formik.handleChange}
              value={formik.values.group.toString()}
              error={formik.errors.group}
            />
            <Field
              number
              id="id"
              label="Numero"
              onChange={formik.handleChange}
              value={formik.values.id.toString()}
              error={formik.errors.id}
            />
            <Field label="Marika">
              <FilterTags active={formik.values.tagIds} onChange={setTagIds} />
            </Field>
          </Surface>
          <Surface title="Fifandraisana">
            <Field
              id="address"
              label="Adiresy"
              onChange={formik.handleChange}
              value={formik.values.address}
              error={formik.errors.address}
            />
            <Phone
              label="Finday"
              onChange={(values) => formik.setFieldValue("phones", values)}
            />
          </Surface>
          <Button
            variant="primary"
            icon={IconPlus}
            label="Ampidirina"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default EditPreacherPage;
