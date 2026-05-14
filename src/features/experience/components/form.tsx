// "use client";

// import { z } from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// // import { useAction } from "next-safe-action/hooks";
// // import {
// //   createAction,
// //   updateAction,
// //   deleteAction,
// // } from "@/lib/actions/education";
// // import { useActionHandler } from "@/hooks/use-action-handler";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   FormControl,
//   FormField,
//   Form,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { ActionButton } from "@components/form/action-button";
// import { Education } from "@prisma/client";
// import { educationFormSchema } from "@lib/schema/education";
// import { isEmpty } from "@/lib/utils";
// import { useConfirm } from "@/hooks/use-confirm";
// import { DatePicker } from "@/components/form/date-picker";

// type Props = {
//   data: Education;
//   isAdmin?: boolean;
//   onClose: () => void;
// };

// export const EducationForm = (props: Props) => {
//   const { data, onClose } = props;
//   const { handleSuccess, handleError } = useActionHandler();

//   const getDefaultValues = () => {
//     return {
//       ...data,
//     };
//   };

//   const form = useForm<z.infer<typeof educationFormSchema>>({
//     resolver: zodResolver(educationFormSchema),
//     defaultValues: getDefaultValues(),
//   });

//   const {
//     reset,
//     formState: { dirtyFields },
//   } = form;

//   const formCreateAction = useAction(createAction, {
//     onSuccess: (data) => handleSuccess(data, onClose),
//     onError: handleError,
//   });

//   const formUpdateAction = useAction(updateAction.bind(null, data.id), {
//     onSuccess: (data) => handleSuccess(data, onClose),
//     onError: handleError,
//   });

//   const onSubmit = async (formData: z.infer<typeof educationFormSchema>) => {
//     if (data.id) {
//       formUpdateAction.execute({ ...formData });
//       return;
//     }
//     formCreateAction.execute({ ...formData });
//   };

//   const [ConfirmDialog, confirm] = useConfirm(
//     "Delete this project",
//     "This project will be removed from the website",
//     "destructive",
//   );

//   const formDeleteAction = useAction(deleteAction.bind(null, data.id), {
//     onSuccess: (data) => handleSuccess(data, onClose),
//     onError: handleError,
//   });

//   const handleDelete = async () => {
//     const ok = await confirm();
//     if (!ok) return;
//     formDeleteAction.execute();
//   };

//   const isExecuting =
//     formUpdateAction.status === "executing" ||
//     formCreateAction.status === "executing";

//   const isDirty = !isEmpty(dirtyFields);

//   return (
//     <Form {...form}>
//       <ConfirmDialog />

//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="w-full  mt-6 grid gap-4"
//       >
//         <FormField
//           control={form.control}
//           name="title"
//           render={({ field }) => (
//             <FormItem className="w-full">
//               <FormLabel>Title</FormLabel>
//               <FormControl>
//                 <Input {...field} value={field.value ?? ""} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <DatePicker name="startDate" title="Start At" form={form} />
//         <DatePicker name="endDate" title="End At" form={form} />
//         <FormField
//           control={form.control}
//           name="description"
//           render={({ field }) => (
//             <FormItem className="w-full">
//               <FormLabel>Description</FormLabel>

//               <FormControl>
//                 <Textarea {...field} value={field.value ?? ""} rows={5} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="location"
//           render={({ field }) => (
//             <FormItem className="w-full">
//               <FormLabel>Location</FormLabel>
//               <FormControl>
//                 <Input {...field} value={field.value ?? ""} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <ActionButton
//           onSubmit={() => {}} // handle automatic form submission
//           onDelete={handleDelete}
//           isDirty={isDirty}
//           isExecuting={isExecuting}
//           isUpdate={!!data.id}
//           deletable={!!data.id}
//           label="Save changes"
//           onReset={() => reset(getDefaultValues())}
//         />
//       </form>
//     </Form>
//   );
// };
