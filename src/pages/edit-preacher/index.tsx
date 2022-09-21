import { useFormik } from "formik";
import * as yup from "yup";

import Field from "@/components/pages/edit-preacher/field";
import Surface from "@/components/surface";
import useStyles from "./style";
import Choice from "@/components/pages/edit-preacher/choice";
import Date from "@/components/pages/edit-preacher/date";
import Phone from "@/components/pages/edit-preacher/phone";

const EditPreacherPage = () => {
  const classes = useStyles();

  const formik = useFormik<{
    id: number;
    group: number;
    firstname: string;
    lastname: string;
    displayname: string;
    gender: "male" | "female";
    birth: Date | null;
    baptism: Date | null;
    address: string;
  }>({
    initialValues: {
      id: 0,
      group: 0,
      firstname: "",
      lastname: "",
      displayname: "",
      gender: "male",
      birth: null,
      baptism: null,
      address: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={classes.container}>
      <div className={classes.mainContainer}>
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
            <Choice
              id="gender"
              label="Lahy sa Vavy"
              onChange={formik.handleChange}
              options={[
                { label: "Lahy", value: "male" },
                { label: "Vavy", value: "female" },
              ]}
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
          </Surface>
          <Surface title="Fifandraisana">
            <Field
              id="address"
              label="Adiresy"
              onChange={formik.handleChange}
              value={formik.values.address}
              error={formik.errors.address}
            />
            <Phone label="Finday" />
          </Surface>
          <button type="submit">send</button>
        </form>
      </div>
    </div>
  );
};

export default EditPreacherPage;
