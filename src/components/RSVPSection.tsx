import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Введите имя"),
  guests: z.string().min(1, "Укажите количество гостей"),
  attending: z.enum(["yes", "no"]),
});

export default function RSVPSection() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", guests: "", attending: "yes" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: Replace with real API call
    alert(`Спасибо, ${values.name}! Ваш ответ получен.`);
  }

  return (
    <section className="wedding-section text-center max-w-xl mx-auto bg-white/80 rounded-lg shadow-lg p-8 mt-8">
      <h2 className="wedding-heading mb-4">RSVP</h2>
      <p className="wedding-body mb-6">Пожалуйста, подтвердите своё присутствие до 1 июля 2026 года.</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField name="name" control={form.control} render={({ field }) => (
            <FormItem>
              <FormLabel>Ваше имя</FormLabel>
              <FormControl>
                <Input placeholder="Имя и фамилия" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField name="guests" control={form.control} render={({ field }) => (
            <FormItem>
              <FormLabel>Количество гостей</FormLabel>
              <FormControl>
                <Input placeholder="1" type="number" min="1" max="10" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField name="attending" control={form.control} render={({ field }) => (
            <FormItem>
              <FormLabel>Вы придёте?</FormLabel>
              <FormControl>
                <div className="flex justify-center gap-4">
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" value="yes" checked={field.value === "yes"} onChange={() => field.onChange("yes")}/>
                    Да
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" value="no" checked={field.value === "no"} onChange={() => field.onChange("no")}/>
                    Нет
                  </label>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <Button type="submit" className="wedding-button w-full mt-4">Отправить</Button>
        </form>
      </Form>
    </section>
  );
}
