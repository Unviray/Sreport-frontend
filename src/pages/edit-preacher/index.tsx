import { useEffect, useState } from "react";

import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { IconPlus } from "@tabler/icons";
import { useFormik } from "formik";
import moment from "moment";
import * as yup from "yup";

import {
  updatePreacher,
  getPreacher,
  getPreacherList,
  createPreacher,
} from "@/services/preacher";
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
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [phoneInitialValue, setPhoneInitialValue] = useState<string[]>([]);

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

          if (id && value === +id) {
            return true;
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
      displayname: yup.string().required("Ilaina ity"),
    }),
    onSubmit: (values) => {
      setSubmitting(true);
      if (id) {
        updatePreacher(+id, values)
          .then((res) => {
            toast.success("Tontosa ny fanovana", {
              position: "bottom-left",
            });

            navigate(`/mpitory/${res.id}`);
          })
          .catch(() => {
            toast.error("Nisy olana tamin'ny fanovana", {
              position: "bottom-left",
            });
          })
          .finally(() => {
            setSubmitting(false);
          });
      } else {
        createPreacher(values)
          .then((res) => {
            toast.success("Tafiditra soa-amantsara", {
              position: "bottom-left",
            });

            navigate(`/mpitory/${res.id}`);
          })
          .catch(() => {
            toast.error("Tsy tafiditra", {
              position: "bottom-left",
            });
          })
          .finally(() => {
            setSubmitting(false);
          });
      }
    },
  });

  useEffect(() => {
    if (id) {
      getPreacher(+id).then((res) => {
        formik.setFieldValue("id", res.id);
        formik.setFieldValue("group", res.group);
        formik.setFieldValue("firstname", res.firstName);
        formik.setFieldValue("lastname", res.lastName);
        formik.setFieldValue("displayname", res.displayName);
        formik.setFieldValue("birth", moment(res.birth).format("YYYY-MM-DD"));
        formik.setFieldValue(
          "baptism",
          moment(res.baptism).format("YYYY-MM-DD")
        );
        formik.setFieldValue("address", res.address);
        setPhoneInitialValue(res.phones);
        formik.setFieldValue(
          "tagIds",
          res.tags
            .filter((tag) => !tag.soon && !tag.current)
            .map((tag) => tag.id)
        );
      });
    } else {
      getPreacherList().then((res) => {
        let freeId = 1;
        while (res.includes(freeId)) {
          freeId++;
        }

        formik.setFieldValue("id", freeId);
      });
    }
  }, [id]);

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
              value={formik.values.birth || ""}
              onChange={(event) =>
                formik.setFieldValue("birth", event.currentTarget.value)
              }
              error={formik.errors.birth}
            />
            <Date
              id="baptism"
              label="Batisa"
              value={formik.values.baptism || ""}
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
              initialValue={phoneInitialValue}
              onChange={(values) => formik.setFieldValue("phones", values)}
            />
          </Surface>
          <Button
            variant="primary"
            icon={IconPlus}
            label="Ampidirina"
            type="submit"
            loading={submitting}
          />
        </form>
      </div>
    </div>
  );
};

export default EditPreacherPage;
