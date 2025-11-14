// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Textarea } from "@/components/ui/textarea"

// export function RSVP() {
//   const [submitted, setSubmitted] = useState(false)

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setSubmitted(true)
//   }

//   return (
//     <section id="rsvp" className="py-24 px-4 bg-muted/30">
//       <div className="container mx-auto max-w-2xl">
//         <h2 className="font-serif text-5xl md:text-6xl font-light text-center mb-6 text-balance">RSVP</h2>
//         <p className="text-center text-muted-foreground mb-12 text-lg">Please respond by May 1, 2025</p>

//         <Card>
//           <CardContent className="p-8 md:p-12">
//             {submitted ? (
//               <div className="text-center py-8">
//                 <h3 className="font-serif text-3xl mb-4">Thank You!</h3>
//                 <p className="text-muted-foreground">We've received your RSVP and can't wait to celebrate with you.</p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <Label htmlFor="firstName">First Name</Label>
//                     <Input id="firstName" required />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="lastName">Last Name</Label>
//                     <Input id="lastName" required />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="email">Email</Label>
//                   <Input id="email" type="email" required />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="attendance">Will you be attending?</Label>
//                   <Select required>
//                     <SelectTrigger id="attendance">
//                       <SelectValue placeholder="Select your response" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="yes">Joyfully accepts</SelectItem>
//                       <SelectItem value="no">Regretfully declines</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="guests">Number of Guests</Label>
//                   <Select required>
//                     <SelectTrigger id="guests">
//                       <SelectValue placeholder="Select number" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="1">1 Guest</SelectItem>
//                       <SelectItem value="2">2 Guests</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="dietary">Dietary Restrictions</Label>
//                   <Textarea
//                     id="dietary"
//                     placeholder="Please let us know of any dietary restrictions or allergies"
//                     rows={3}
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="message">Message to the Couple</Label>
//                   <Textarea id="message" placeholder="Share your well wishes or a favorite memory" rows={4} />
//                 </div>

//                 <Button type="submit" size="lg" className="w-full">
//                   Submit RSVP
//                 </Button>
//               </form>
//             )}
//           </CardContent>
//         </Card>
//       </div>
//     </section>
//   )
// }
