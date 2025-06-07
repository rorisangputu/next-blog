"use server";

export async function createSubscriber(formData: FormData) {
  console.log("Raw data:", formData.get("email"));
}
